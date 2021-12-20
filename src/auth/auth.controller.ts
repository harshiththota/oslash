import { Body,Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common'

import { UserInput } from 'src/users/users.input'
import { User } from 'src/users/users.model'

import { AuthService } from './auth.service'
import { Login } from './login.input'
import { Token } from './token.model'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async login(@Query() input: Login): Promise<Token> {
		// console.log('input : ', input)

    const user = await this.authService.validateUser(input)

    if (!user) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)

    return this.authService.login(user)
  }

  @Post('signup')
  async signUp(@Body() input: UserInput): Promise<User> {
		// console.log('input : ', input)

    const user = await this.authService.signUp(input)

    if (!user) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)

    return user
  }
}
