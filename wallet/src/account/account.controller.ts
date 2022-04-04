import { Controller, Post, Body } from '@nestjs/common'

import { AccountRequest } from './request/account.request'

import { AccountService } from './account.service'

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Post()
  async create(@Body() request: AccountRequest) {
    return await this.service.create(request)
  }
}
