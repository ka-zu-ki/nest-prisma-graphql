import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PostsResolver } from './post.resolvers';

@Module({
  providers: [PostsResolver, PrismaService],
})
export class PostsModule {}
