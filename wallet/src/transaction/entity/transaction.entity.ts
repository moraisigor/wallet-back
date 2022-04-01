import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Kind } from './kind.entity'
import { Account } from 'src/account/entity/account.entity'

@Entity()
export class Transaction {
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

  @ManyToOne(() => Account, (account) => account.transaction)
  account: Account
}
