import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Transfer } from 'src/transfer/entity/transfer.entity'
import { Transaction } from '../../transaction/entity/transaction.entity'

@Entity()
export class Account {
  constructor(account: Partial<Account>) {
    Object.assign(this, account)
  }

  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column()
  name: string

  @Column()
  document: string

  @OneToMany(() => Transfer, (transfer) => transfer.account)
  transfer: Transfer

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transaction: Transaction
}
