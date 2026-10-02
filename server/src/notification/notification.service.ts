import { Injectable, NotFoundException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import type { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { UsersService } from '../users/users.service.js';
import { createHash, randomBytes } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import { db } from "../prisma/db.js"

@Injectable()
export class NotificationService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly userService: UsersService,
    private readonly configService: ConfigService
  ) { }

  async forgotPassword({ email }: ForgotPasswordDto) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException("If an account with this email exists, you will receive a password reset link.")
    }

    const FIFTEEN_MINUTES_IN_MILLISECONDS = 900_000

    const textResetToken = randomBytes(32).toString('hex');
    const hash = createHash('sha256').update(textResetToken).digest("hex");
    const expiresAt = new Date(
      Date.now() + FIFTEEN_MINUTES_IN_MILLISECONDS
    ).toISOString();

    const resetPasswordURL = `${this.configService.getOrThrow('EMAIL_RESET_PASSWORD_URL')}?token=${textResetToken}`

    await db.orm.public.PasswordResetToken.create({
      tokenHash: hash,
      expiresAt,
      userId: user.id
    })

    return this.mailerService.sendMail({
      to: email,
      subject: 'Reset password',
      template: 'reset-password',
      context: {
        name: user.name,
        resetPasswordURL
      }
    });
  }
}

