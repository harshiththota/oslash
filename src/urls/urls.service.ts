import { Injectable } from '@nestjs/common'
import { ReturnModelType } from '@typegoose/typegoose'
import * as bcryptjs from 'bcryptjs'
import { InjectModel } from 'nestjs-typegoose'

import { UrlInput } from './urls.input'
import { Url } from './urls.model'

@Injectable()
export class UrlsService {
  constructor(
    @InjectModel(Url) private readonly urlModel: ReturnModelType<typeof Url>,
  ) {}

  async create(input: UrlInput): Promise<Url> {
    const createdItem = new this.urlModel(input)

    return createdItem.save()
  }

  async findAll(): Promise<Url[]> {
    return this.urlModel.find().exec()
  }

  async findOne(id: string): Promise<Url> {
    return this.urlModel.findOne({ _id: id })
  }

  async validate(input: UrlInput): Promise<Url | null> {
    // const { email, password } = input
    // const user = await this.userModel.findOne({ email })

    // if (!user) return null

    // const valid = await bcryptjs.compare(password, user.password)

    // return valid ? user : null
    return null
  }

  async delete(id: string): Promise<Url> {
    return this.urlModel.findByIdAndRemove(id)
  }
}
