import { Controller, Get } from '@nestjs/common'

import { Transfer } from './entity/transfer.entity'

import { TransferService } from './transfer.service'

@Controller('transfer')
export class TransferController {
  constructor(private readonly service: TransferService) {}
}
