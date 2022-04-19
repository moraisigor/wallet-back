import { Injectable } from '@nestjs/common'

import { Account } from './entity/account.entity'
import { Transfer } from '../transfer/entity/transfer.entity'
import { CreateAccountRequest } from './request/create.account.request'

import { GetTransferCase } from './case/get.transfer.case'
import { CreateAccountCase } from './case/create.account.case'

@Injectable()
export class AccountService {
  constructor(private readonly account: CreateAccountCase, private readonly get: GetTransferCase) {}

  transfer(id: string): Promise<Transfer[]> {
    return this.get.run(id)
  }

  create(request: CreateAccountRequest): Promise<Account> {
    return this.account.run(request)
  }
}
