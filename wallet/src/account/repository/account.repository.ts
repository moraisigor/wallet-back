import { Injectable } from '@nestjs/common'

import { InjectConnection, InjectRepository } from '@nestjs/typeorm'
import { Connection, Repository, EntityManager } from 'typeorm'

import { Kind } from '../../transaction/entity/kind.entity'
import { Account } from '../entity/account.entity'
import { Transaction } from '../../transaction/entity/transaction.entity'

import { IAccountRepository } from './account.repository.interface'

@Injectable()
export class AccountRepository implements IAccountRepository {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectRepository(Account) private readonly repository: Repository<Account>,
  ) {}

  find(document: string): Promise<Account> {
    return this.repository.findOne({ document })
  }

  create({ name, document, balance }: Account): Promise<Account> {
    return this.connection.transaction(async (manager: EntityManager) => {
      const account = await manager.save(Account, { name, document, balance })

      await manager.save(Transaction, { kind: Kind.CREDIT, amount: balance, account })

      return account
    })
  }
}
