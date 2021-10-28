import { Module } from '@nestjs/common';
import { ApiDataAccessArticleModule } from '@veridis-quo/api/data-access-article';
import { ArticleController } from './article.controller';

@Module({
  controllers: [ArticleController],
  imports: [ApiDataAccessArticleModule],
})
export class ApiFeatureArticleModule {}
