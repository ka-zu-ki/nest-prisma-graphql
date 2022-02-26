import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetPostsArgs {
  type?: string[];
}
