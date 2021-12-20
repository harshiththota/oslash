import { forwardRef, Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'

import { UsersModule } from 'src/users/users.module'

// import { JwtStrategy } from './jwt.strategy'
import { UrlsController } from './urls.controller'
import { Url } from './urls.model'
import { UrlsService } from './urls.service'

@Module({
  imports: [
    TypegooseModule.forFeature([
      { typegooseClass: Url, schemaOptions: { timestamps: true } },
    ]),
    forwardRef(() => UsersModule),
  ],
  providers: [UrlsService],
  controllers: [UrlsController],
  exports: [UrlsService],
})
export class UrlsModule {}
