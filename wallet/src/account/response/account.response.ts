import { Account } from '../entity/account.entity'
import { Transaction } from '../../transaction/entity/transaction.entity'

export class AccountResponse {
  id: string
  name: string
  document: string
  amount: number

  constructor(account: Partial<Account>, transaction: Partial<Transaction>) {
    this.id = account.id
    this.name = account.name
    this.document = account.document
    this.amount = transaction.amount
  }
}
