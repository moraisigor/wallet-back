import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Kind } from './kind.entity'
import { Account } from '../../account/entity/account.entity'

@Entity()
export class Transaction {
  constructor(transaction: Partial<Transaction>) {
    Object.assign(this, transaction)
  }

  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create: Date

  @UpdateDateColumn()
  update: Date

  @Column({ type: 'enum', enum: Kind })
  kind: Kind

  @Column()
  amount: number

  @ManyToOne(() => Account, (account) => account.transaction, { eager: true, nullable: false })
  account: Account
}
