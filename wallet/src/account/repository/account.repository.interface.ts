import { Account } from '../entity/account.entity'

export interface IAccountRepository {
  find(id: string): Promise<Account>
  document(document: string): Promise<Account>
  create(account: Account): Promise<Account>
}
