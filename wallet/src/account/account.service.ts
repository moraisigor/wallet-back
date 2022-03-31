import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Account } from './entity/account.entity'

@Injectable()
export class AccountService {
  constructor(@InjectRepository(Account) private readonly repository: Repository<Account>) {}
}
