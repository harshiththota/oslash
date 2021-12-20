import { Body,Controller, Get, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common'

import { JwtAuthGuard } from '../auth/jwt-auth.guard'

import { UrlInput } from './urls.input'
import { Url } from './urls.model'
import { UrlsService } from './urls.service'

@Controller('url')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createUrl(@Body() input: UrlInput): Promise<Url> {
		console.log('input : ', input)

    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)

    // return this.urlService.create(input)
  }
}
