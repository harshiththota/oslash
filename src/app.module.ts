import { Module } from '@nestjs/common'

import { AuthModule } from './auth/auth.module'
import { HealthController } from './health/health.controller'
import { TypegooseHealthIndicator } from './health/typegoose.indicator'
import { UrlsModule } from './urls/urls.module'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
import { AppImports } from './app.imports'
import { AppService } from './app.service'

@Module({
  imports: [
    ...AppImports,
    UsersModule,
    AuthModule,
    UrlsModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, TypegooseHealthIndicator],
})
export class AppModule {}
