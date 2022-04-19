import { Account } from '../../account/entity/account.entity'
import { Transfer } from '../entity/transfer.entity'

export interface ITransferRepository {
  create(sender: Account, receiver: Account, amount: number): Promise<Transfer>
}
