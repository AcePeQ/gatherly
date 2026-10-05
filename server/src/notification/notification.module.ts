import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service.js';
import { MailerModule } from '@nestjs-modules/mailer';
import { notificationConfig } from '../config/notification.config.js';

@Module({
  imports: [MailerModule.forRoot(notificationConfig)],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule { }
