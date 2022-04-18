import { Controller, Post, Body } from '@nestjs/common'

import { AccountService } from './account.service'

import { CreateAccountRequest } from './request/create.account.request'
import { CreateAccountResponse } from './response/create.account.response'

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Post()
  async create(@Body() request: CreateAccountRequest): Promise<CreateAccountResponse> {
    const account = await this.service.create(request)

    return new CreateAccountResponse(account)
  }
}
