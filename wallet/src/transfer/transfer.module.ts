import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Transfer } from './entity/transfer.entity'
import { TransferService } from './transfer.service'
import { TransferController } from './transfer.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Transfer])],
  providers: [TransferService],
  controllers: [TransferController],
})
export class TransferModule {}
