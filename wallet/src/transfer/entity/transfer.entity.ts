import { Entity, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Account } from '../../account/entity/account.entity'
import { Transaction } from '../../transaction/entity/transaction.entity'

@Entity()
export class Transfer {
  constructor(transfer: Partial<Transfer>) {
    Object.assign(this, transfer)
  }

  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @OneToOne(() => Transaction, { eager: true, nullable: false })
  @JoinColumn()
  send: Transaction

  @OneToOne(() => Transaction, { eager: true, nullable: false })
  @JoinColumn()
  receive: Transaction

  @ManyToOne(() => Account, (account) => account.transaction, { nullable: false })
  account: Account
}
