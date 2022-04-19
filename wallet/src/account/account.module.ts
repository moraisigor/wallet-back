import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransferModule } from '../transfer/transfer.module'

import { Account } from './entity/account.entity'

import { AccountService } from './account.service'
import { GetTransferCase } from 'src/account/case/get.transfer.case'
import { CreateAccountCase } from './case/create.account.case'

import { AccountController } from './account.controller'
import { AccountRepository } from './repository/account.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Account]), forwardRef(() => TransferModule)],
  exports: [AccountRepository],
  providers: [AccountService, AccountRepository, GetTransferCase, CreateAccountCase],
  controllers: [AccountController],
})
export class AccountModule {}
