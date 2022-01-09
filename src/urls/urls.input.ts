import { InputType, PartialType } from '@nestjs/graphql'

import { User } from 'src/users/users.model'

@InputType()
export class UrlInput {
  shortLink: string
  description?: string
  url: string
  tags?: [string]
}

export class UrlModel {
  user: User
  shortLink: string
  description?: string
  url: string
  tags?: [string]
}

export class UrlDelete {
  id: string
}

@InputType()
export class UpdateUrlInput extends PartialType(UrlInput) {}
