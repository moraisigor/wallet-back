import { Account } from '../entity/account.entity'

export interface IAccountRepository {
  find(id: string): Promise<Account>
  findByDocument(document: string): Promise<Account>
  create(account: Account): Promise<Account>
  update(account: Account): Promise<Account>
}
