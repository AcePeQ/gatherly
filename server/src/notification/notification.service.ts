import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ResetPasswordDto } from './dto/resetPassword.dto';

@Injectable()
export class NotificationService {
  constructor(private readonly mailerService: MailerService) { }

  async resetPassword({ email }: ResetPasswordDto) {
    return this.mailerService.sendMail({
      to: email,
      subject: 'Reset password',
      // template/context albo html
    });
  }
}