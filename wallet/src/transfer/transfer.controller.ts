import { Controller, Post, Body } from '@nestjs/common'

import { TransferService } from './transfer.service'

import { CreateTransferRequest } from './request/create.transfer.request'
import { CreateTransferResponse } from './response/create.transfer.response'

@Controller('transfer')
export class TransferController {
  constructor(private readonly service: TransferService) {}

  @Post()
  async create(@Body() request: CreateTransferRequest): Promise<CreateTransferResponse> {
    const transfer = await this.service.create(request)

    return new CreateTransferResponse(transfer)
  }
}
