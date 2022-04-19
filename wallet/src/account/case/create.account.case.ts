import { Injectable, BadRequestException } from '@nestjs/common'

import { Account } from '../entity/account.entity'
import { CreateAccountRequest } from '../request/create.account.request'

import { AccountRepository } from '../repository/account.repository'

@Injectable()
export class CreateAccountCase {
  constructor(private readonly repository: AccountRepository) {}

  async run({ name, document, balance }: CreateAccountRequest): Promise<Account> {
    const account = await this.repository.findByDocument(document)

    if (account) {
      throw new BadRequestException('account already exists')
    }

    return this.repository.create(new Account({ name, document, balance }))
  }
}
