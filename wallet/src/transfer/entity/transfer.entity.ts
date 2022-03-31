import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

import { Account } from '../../account/entity/account.entity'
import { Transaction } from '../../transaction/entity/transaction.entity'

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  send: Transaction

  @Column()
  receive: Transaction

  @Column()
  name: Account
}
