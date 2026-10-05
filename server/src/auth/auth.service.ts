import bcrypt from 'bcrypt';
import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto.js";
import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';
import { JwtService } from '@nestjs/jwt';
import { createHash, randomBytes } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import { db } from '../prisma/db.js';
import { NotificationService } from '../notification/notification.service.js';
import type { ForgotPasswordDto } from './dto/forgot-password.dto.js';

const PASSWORD_RESET_TOKEN_TTL_MS = 15 * 60 * 1000;
const FORGOT_PASSWORD_RESPONSE = {
  message: 'If an account with this email exists, you will receive a password reset link.',
};

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly notificationService: NotificationService,
  ) { }
  async register(data: RegisterDto) {
    const { email, name, password } = data;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) {
      throw new ConflictException("Email is already in use")
    }

    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltOrRounds);

    await this.userService.createUser(name, email, passwordHash);

    return {
      message: "Successfully created an account"
    }
  }

  async login(data: LoginDto) {
    const { email, password, remember } = data;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isCorrectPassword = await bcrypt.compare(password, user.passwordHash)

    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email, username: user.name }
    const expiresIn = remember ? "30d" : "1h";

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn
      })
    }
  }

  async forgotPassword({ email }: ForgotPasswordDto) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      return FORGOT_PASSWORD_RESPONSE;
    }

    const resetToken = randomBytes(32).toString('hex');
    const tokenHash = createHash('sha256').update(resetToken).digest('hex');
    const expiresAt = new Date(
      Date.now() + PASSWORD_RESET_TOKEN_TTL_MS,
    ).toISOString();
    const resetPasswordUrl = new URL(
      this.configService.getOrThrow<string>('EMAIL_RESET_PASSWORD_URL'),
    );

    resetPasswordUrl.searchParams.set('token', resetToken);

    await db.orm.public.PasswordResetToken.create({
      tokenHash,
      expiresAt,
      userId: user.id,
    });

    await this.notificationService.sendPasswordResetEmail({
      email: user.email,
      name: user.name,
      resetPasswordUrl: resetPasswordUrl.toString(),
    });

    return FORGOT_PASSWORD_RESPONSE;
  }
}
