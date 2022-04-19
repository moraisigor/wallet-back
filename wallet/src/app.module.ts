import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AccountModule } from './account/account.module'
import { TransferModule } from './transfer/transfer.module'
import { TransactionModule } from './transaction/transaction.module'

@Module({
  imports: [TypeOrmModule.forRoot(), AccountModule, TransferModule, TransactionModule],
})
export class AppModule {}
