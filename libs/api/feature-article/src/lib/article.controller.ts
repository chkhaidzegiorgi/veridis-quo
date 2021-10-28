import { Controller, Get } from '@nestjs/common';
import { ArticleService } from '@veridis-quo/api/data-access-article';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAll() {
    return this.articleService.getAll();
  }
}
