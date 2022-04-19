import { Min, Length, IsInt, IsString } from 'class-validator'

export class CreateTransferRequest {
  @Length(11, 11)
  @IsString()
  sender: string

  @Length(11, 11)
  @IsString()
  receiver: string

  @Min(1)
  @IsInt()
  amount: number
}
