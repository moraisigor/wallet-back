import { Injectable, BadRequestException } from '@nestjs/common'
import { Between } from 'typeorm'

import { Account } from 'src/account/entity/account.entity'
import { Transfer } from '../entity/transfer.entity'
import { CreateTransferRequest } from '../request/create.transfer.request'

import { AccountRepository } from 'src/account/repository/account.repository'
import { TransferRepository } from '../repository/transfer.repository'

import { subMinutes } from 'date-fns'

@Injectable()
export class CreateTransferCase {
  constructor(private readonly account: AccountRepository, private readonly repository: TransferRepository) {}

  async run(request: CreateTransferRequest): Promise<Transfer> {
    const { amount } = request

    const sender = await this.account.document(request.sender)

    if (sender == null) {
      throw new BadRequestException('sender account not found')
    }

    const receiver = await this.account.document(request.receiver)

    if (receiver == null) {
      throw new BadRequestException('receiver account not found')
    }

    if (sender.balance < amount) {
      throw new BadRequestException('insufficient balance')
    }

    const duplicate = await this.#duplicate(sender, receiver, amount)

    if (duplicate) {
      throw new BadRequestException('duplicate transaction')
    }

    return this.repository.create(sender, receiver, amount)
  }

  async #duplicate(sender: Account, receiver: Account, amount: number): Promise<boolean> {
    const current = new Date()

    const list = await this.repository.all({
      where: { create: Between(subMinutes(current, 2), current) },
    })

    return list.some((transfer) => transfer.send.amount == amount && transfer.receive.account.id == receiver.id)
  }
}
