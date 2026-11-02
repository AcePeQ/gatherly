import { Controller, Get, Post, Body, UseGuards, Req, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { type RegisterDto, registerSchema } from './dto/register.dto.js';
import { AuthService } from './auth.service.js';
import { type LoginDto, loginSchema } from './dto/login.dto.js';
import { AuthGuard } from './auth.guard.js';
import { type AuthenticatedRequest } from '../users/dto/user.dto.js';
import {
  type ForgotPasswordDto,
  forgotPasswordSchema,
} from './dto/forgot-password.dto.js';
import { type ResetPasswordDto, resetPasswordSchema } from './dto/reset-password.dto.js';
import { type Response } from 'express';
import { minutes, seconds, SkipThrottle, Throttle } from '@nestjs/throttler';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("register")
  async createUser(@Body({ schema: registerSchema }) registerData: RegisterDto) {
    return this.authService.register(registerData);
  }

  @Post("login")
  async login(@Body({ schema: loginSchema }) loginData: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(loginData, res);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res({ passthrough: true }) response: Response) {
    return this.authService.logout(response);
  }

  @Throttle({
    short: {
      limit: 1,
      ttl: seconds(5)
    },
    medium: {
      limit: 3,
      ttl: minutes(1),
    },
    long: {
      limit: 5,
      ttl: minutes(15)
    }
  })
  @Post('forgot-password')
  async forgotPassword(
    @Body({ schema: forgotPasswordSchema }) forgotPasswordData: ForgotPasswordDto,
  ) {
    return this.authService.forgotPassword(forgotPasswordData);
  }

  @Throttle({
    short: {
      limit: 3,
      ttl: seconds(10),
    },
    medium: {
      limit: 5,
      ttl: minutes(1),
    },
    long: {
      limit: 10,
      ttl: minutes(15),
    },
  })
  @Post('reset-password')
  async resetPassword(@Body({ schema: resetPasswordSchema }) resetPasswordData: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordData);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: AuthenticatedRequest) {
    return req.user;
  }
}
