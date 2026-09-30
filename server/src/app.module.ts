import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { MailerModule } from '@nestjs-modules/mailer';
import { NotificationModule } from './notification/notification.module.js';
import { notificationConfig } from './config/notification.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRoot(notificationConfig),
    AuthModule,
    UsersModule,
    NotificationModule
  ],
})
export class AppModule { }
