import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountModule } from '../account/account.module'

import { Transfer } from './entity/transfer.entity'

import { TransferService } from './transfer.service'
import { CreateTransferCase } from './case/create.transfer.case'

import { TransferController } from './transfer.controller'
import { TransferRepository } from './repository/transfer.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Transfer]), forwardRef(() => AccountModule)],
  exports: [TransferRepository],
  providers: [TransferService, TransferRepository, CreateTransferCase],
  controllers: [TransferController],
})
export class TransferModule {}
