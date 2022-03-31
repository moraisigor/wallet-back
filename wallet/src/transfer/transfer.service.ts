import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Transfer } from './entity/transfer.entity'

@Injectable()
export class TransferService {
  constructor(@InjectRepository(Transfer) private readonly repository: Repository<Transfer>) {}
}
