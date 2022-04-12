import { Account } from '../entity/account.entity'

export interface IAccountRepository {
  find(document: string): Promise<Account>
  create(account: Account): Promise<Account>
}
