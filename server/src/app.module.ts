import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './config/mailer.config.js';
import { NotificationModule } from './notification/notification.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRoot(mailerConfig),
    AuthModule,
    UsersModule,
    NotificationModule
  ],
})
export class AppModule { }
