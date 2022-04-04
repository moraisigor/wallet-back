import { Injectable } from '@nestjs/common'

import { Connection, EntityManager, Repository, Transaction, TransactionManager } from 'typeorm'
import { InjectConnection, InjectRepository } from '@nestjs/typeorm'

import { Account } from './entity/account.entity'
import { AccountRequest } from './request/account.request'
import { CreateAccountError } from './account.error'
import { AccountResponse } from './response/account.response'
import { Transaction as T } from 'src/transaction/entity/transaction.entity'
import { Kind } from 'src/transaction/entity/kind.entity'

@Injectable()
export class AccountService {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectRepository(Account) private readonly repository: Repository<Account>) {}
    
  async create(request: AccountRequest) {
    const { name, document, amount } = request

    const find = await this.repository.findOne({ document })

    if (find) { throw new CreateAccountError('') }

    this.connection.transaction(async (entity: EntityManager) => {
      const account = await entity.save(new Account({ name, document }))
      const transaction = await entity.save(new T({ kind: Kind.CREDIT, amount, account }))

      return new AccountResponse(account, transaction)
    })
  }
}
