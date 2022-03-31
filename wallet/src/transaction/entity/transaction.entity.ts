import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column()
  kind: Kind

  @Column()
  amount: number

  @Column()
  account: Account
}
