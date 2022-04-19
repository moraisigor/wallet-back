import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Account } from './entity/account.entity'

import { AccountService } from './account.service'
import { AccountController } from './account.controller'
import { AccountRepository } from './repository/account.repository'

import { CreateAccountCase } from './case/create.account.case'

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  exports: [AccountRepository],
  providers: [AccountService, AccountRepository, CreateAccountCase],
  controllers: [AccountController],
})
export class AccountModule {}
