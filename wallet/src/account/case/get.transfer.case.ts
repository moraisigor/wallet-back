import { Injectable, BadRequestException } from '@nestjs/common'

import { Transfer } from '../../transfer/entity/transfer.entity'

import { AccountRepository } from '../../account/repository/account.repository'
import { TransferRepository } from '../../transfer/repository/transfer.repository'

@Injectable()
export class GetTransferCase {
  constructor(private readonly account: AccountRepository, private readonly repository: TransferRepository) {}

  async run(id: string): Promise<Transfer[]> {
    const account = await this.account.find(id)

    if (account == null) {
      throw new BadRequestException('account not found')
    }

    return this.repository.all({
      where: { account },
    })
  }
}
