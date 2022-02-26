import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import * as path from 'path';
import { PrismaService } from './prisma.service';
import { PostsResolver } from './posts/post.resolvers';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    // PostsModule,
  ],
  controllers: [AppController],
  // providers: [AppService, PrismaService],
  providers: [AppService, PrismaService, PostsResolver],
})
export class AppModule {}
