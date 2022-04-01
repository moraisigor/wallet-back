import { Entity, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

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

  @OneToOne(() => Transaction)
  @JoinColumn()
  send: Transaction

  @OneToOne(() => Transaction)
  @JoinColumn()
  receive: Transaction

  @ManyToOne(() => Account, (account) => account.transaction)
  account: Account
}
