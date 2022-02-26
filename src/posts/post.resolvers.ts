import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './models/post.model';

@Resolver((of) => PostModel)
export class PostsResolver {
  constructor() {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
    ];
  }
}
