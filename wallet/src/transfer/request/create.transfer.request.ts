import { Min, Length } from 'class-validator'

export class CreateTransferRequest {
  @Length(36, 36)
  sender: string

  @Length(36, 36)
  receiver: string

  @Min(1)
  amount: number
}
