import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

interface PasswordResetEmailData {
  email: string;
  name: string;
  resetPasswordUrl: string;
}

@Injectable()
export class NotificationService {
  constructor(private readonly mailerService: MailerService) { }

  async sendPasswordResetEmail({
    email,
    name,
    resetPasswordUrl,
  }: PasswordResetEmailData) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Reset password',
      template: 'reset-password',
      context: {
        name,
        resetPasswordURL: resetPasswordUrl,
      },
    });
  }
}

