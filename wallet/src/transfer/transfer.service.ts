import { Injectable } from '@nestjs/common'

import { Transfer } from './entity/transfer.entity'
import { CreateTransferRequest } from './request/create.transfer.request'

import { CreateTransferCase } from './case/create.transfer.case'

@Injectable()
export class TransferService {
  constructor(private readonly transfer: CreateTransferCase) {}

  create(request: CreateTransferRequest): Promise<Transfer> {
    return this.transfer.run(request)
  }
}
