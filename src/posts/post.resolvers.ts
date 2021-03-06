import { PrismaService } from '../../prisma/prisma.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './models/post.model';
import { GetPostsArgs } from './models/get-posts-connection.args';

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.post.findMany();
  }

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts(@Args() args: GetPostsArgs) {
    return this.prisma.post.findMany({
      where: {
        type: args.type
          ? {
              in: args.type,
            }
          : undefined,
        published: true, // ついでに指定。公開ブログへ渡すデータなのでtrue固定にしちゃう
      },
      orderBy: {
        publishDate: 'desc',
      },
    });
  }
}
