import { Min, Length } from 'class-validator'

export class CreateAccountRequest {
  @Length(4, 40)
  name: string

  @Length(11, 11)
  document: string

  @Min(1)
  amount: number
}
