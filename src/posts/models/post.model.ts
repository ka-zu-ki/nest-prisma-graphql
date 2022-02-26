import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field(() => ID)
  id: string;

  title: string;
  emoji?: string;
  type: string;
  thumbNailUrl: string;
  excerpt?: string;
  contentPath: string;
  published: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishDate?: Date;
}
