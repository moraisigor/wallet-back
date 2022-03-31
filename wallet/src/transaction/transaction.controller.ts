import { Controller, Get } from '@nestjs/common'

import { Transaction } from './entity/transaction.entity'

import { TransactionService } from './transaction.service'

@Controller('transaction')
export class TransactionController {
  constructor(private readonly service: TransactionService) {}
}
