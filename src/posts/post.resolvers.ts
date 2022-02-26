import { PrismaService } from '../prisma.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './models/post.model';

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) {}

  // 役目を終えたのでリネーム
  @Query(() => [PostModel], { name: 'fixedPosts', nullable: true })
  async getPostsByFixedData() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }

  @Query(() => [PostModel], { name: 'prismaPosts', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.post.findMany();
  }

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return this.prisma.post.findMany({
      orderBy: {
        publishDate: 'desc',
      },
    });
  }
}
