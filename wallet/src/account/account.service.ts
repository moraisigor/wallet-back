import { Injectable } from '@nestjs/common'

import { Account } from './entity/account.entity'
import { CreateAccountRequest } from './request/create.account.request'

import { CreateAccountCase } from './case/create.account.case'

@Injectable()
export class AccountService {
  constructor(private readonly account: CreateAccountCase) {}

  create(request: CreateAccountRequest): Promise<Account> {
    return this.account.run(request)
  }
}
