import { Controller, Get, Post, Body } from '@nestjs/common';
import { type RegisterDto, registerSchema } from './dto/register.dto.js';
import { AuthService } from './auth.service.js';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("register")
  async createUser(@Body({ schema: registerSchema }) registerData: RegisterDto) {
    return this.authService.register(registerData);
  }
}