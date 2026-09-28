import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { type RegisterDto, registerSchema } from './dto/register.dto.js';
import { AuthService } from './auth.service.js';
import { type LoginDto, loginSchema } from './dto/login.dto.js';
import { AuthGuard } from './auth.guard.js';
import { type AuthenticatedRequest } from '../users/dto/user.dto.js';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("register")
  async createUser(@Body({ schema: registerSchema }) registerData: RegisterDto) {
    return this.authService.register(registerData);
  }

  @Post("login")
  async login(@Body({ schema: loginSchema }) loginData: LoginDto) {
    return this.authService.login(loginData)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: AuthenticatedRequest) {
    return req.user;
  }
}