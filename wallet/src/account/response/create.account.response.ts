import { Account } from '../entity/account.entity'

export class CreateAccountResponse {
  id: string
  create: Date
  name: string
  document: string
  balance: number

  constructor(account: Partial<Account>) {
    this.id = account.id
    this.create = account.create
    this.name = account.name
    this.document = account.document
    this.balance = account.balance
  }
}
