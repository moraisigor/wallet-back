import { Controller, Get } from '@nestjs/common'

import { Account } from './entity/account.entity'

import { AccountService } from './account.service'

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}
}
