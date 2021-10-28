import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  appConfiguration,
  mongoConfiguration,
} from '@veridis-quo/api/utils-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfiguration,
        mongoConfiguration
      ],
    }),
  ],
})
export class ApiFeatureConfigModule {}
