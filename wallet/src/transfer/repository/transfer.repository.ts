import { Injectable } from '@nestjs/common'

import { InjectConnection, InjectRepository } from '@nestjs/typeorm'
import { Connection, Repository, EntityManager } from 'typeorm'

import { Kind } from '../../transaction/entity/kind.entity'
import { Account } from 'src/account/entity/account.entity'
import { Transfer } from '../entity/transfer.entity'
import { Transaction } from '../../transaction/entity/transaction.entity'

import { ITransferRepository } from './transfer.repository.interface'

@Injectable()
export class TransferRepository implements ITransferRepository {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectRepository(Transfer) private readonly repository: Repository<Transfer>,
  ) {}

  all(query: unknown): Promise<Transfer[]> {
    return this.repository.find(query)
  }

  create(sender: Account, receiver: Account, amount: number): Promise<Transfer> {
    return this.connection.transaction(async (manager: EntityManager) => {
      const send = await manager.save(Transaction, { kind: Kind.DEBIT, amount, account: sender })
      const receive = await manager.save(Transaction, { kind: Kind.CREDIT, amount, account: receiver })

      return await manager.save(Transfer, { send, receive, account: sender })
    })
  }
}
