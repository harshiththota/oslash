import { Controller, Delete, Get, HttpException, HttpStatus, Post, Query, Req,UseGuards } from '@nestjs/common'

import { JwtAuthGuard } from '../auth/jwt-auth.guard'

import { UrlDelete, UrlInput, UrlModel } from './urls.input'
import { Url } from './urls.model'
import { UrlsService } from './urls.service'

@Controller('url')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createUrl(@Query() input: UrlInput, @Req() req: any): Promise<Url> {
    const { user } = req

     const data: UrlModel = { ...input, user: user.id }

     console.log('data : ', data)

    // throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    return this.urlService.create(data)
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  async getUrls(@Req() req: any): Promise<Url> {
    const { user } = req

    return this.urlService.findByUser(user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  async delete(@Query() input: UrlDelete, @Req() req: any): Promise<Url> {
     const { id } = input

     return this.urlService.findOne(id)
    // throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    // return this.urlService.findByUser(id)
  }
}
