import { Transfer } from '../../transfer/entity/transfer.entity'

export class GetTransferResponse {
  id: string
  create: Date
  amount: number
  sender: string
  receiver: string

  constructor(transfer: Transfer) {
    const { id, create, send, receive } = transfer

    this.id = id
    this.create = create
    this.amount = send.account.balance
    this.sender = send.account.document
    this.receiver = receive.account.document
  }
}
