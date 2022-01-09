import {
  ObjectType,
} from '@nestjs/graphql'
import { prop } from '@typegoose/typegoose'

import { User } from 'src/users/users.model'

@ObjectType()
export class Url {
  @prop()
  shortLink: string

  @prop()
  description: string

  @prop()
  tags: [string]

  @prop()
  url: string

  @prop({ ref: () => User })
  user: User

}
