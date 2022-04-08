import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Transaction } from './entity/transaction.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [],
  controllers: [],
})
export class TransactionModule {}
