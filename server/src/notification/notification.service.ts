import { Injectable, NotFoundException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import type { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class NotificationService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly userService: UsersService
  ) { }

  async forgotPassword({ email }: ForgotPasswordDto) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException("User not found!")
    }

    return this.mailerService.sendMail({
      to: email,
      subject: 'Reset password',
      // template/context albo html
    });
  }
}
