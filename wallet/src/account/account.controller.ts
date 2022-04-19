import { Controller, Get, Post, Param, Body } from '@nestjs/common'

import { AccountService } from './account.service'

import { GetTransferResponse } from './response/get.transfer.response'
import { CreateAccountRequest } from './request/create.account.request'
import { CreateAccountResponse } from './response/create.account.response'

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get('/:id/transfer')
  async get(@Param('id') id: string) {
    const list = await this.service.transfer(id)

    return list.map((transfer) => new GetTransferResponse(transfer))
  }

  @Post()
  async create(@Body() request: CreateAccountRequest): Promise<CreateAccountResponse> {
    const account = await this.service.create(request)

    return new CreateAccountResponse(account)
  }
}
