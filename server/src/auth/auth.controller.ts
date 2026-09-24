import { Controller, Get, Post, Body } from '@nestjs/common';
import { type RegisterDto, registerSchema } from './dto/register.dto';

@Controller("auth")
export class AuthController {
  @Post("register")
  createUser(@Body({ schema: registerSchema }) registerData: RegisterDto) {
    const { name, password, email } = registerData;

  }
}