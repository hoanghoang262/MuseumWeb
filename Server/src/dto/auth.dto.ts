import { IsEmail } from "class-validator";

export class SignInDto implements SignInDto {
  @IsEmail()
  email: string;
  password: string;
}
