import { Module } from '@nestjs/common';

import { ApiFeatureConfigModule } from '@veridis-quo/api/feature-config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MongoConfiguration,
  mongoConfiguration,
} from '@veridis-quo/api/utils-config';
import { ApiFeatureArticleModule } from '@veridis-quo/api/feature-article';

@Module({
  imports: [
    ApiFeatureConfigModule,
    ApiFeatureArticleModule,
    MongooseModule.forRootAsync({
      inject: [mongoConfiguration.KEY],
      useFactory: (config: MongoConfiguration) => {
        return {
          uri: config.uri,
          dbName: config.dbName,
        };
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}
