import { IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @Length(5, 30)
  username: string;
}
