import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { minutes, seconds, ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler"
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: "short",
          ttl: seconds(1),
          limit: 3,
        },
        {
          name: "medium",
          ttl: seconds(10),
          limit: 20,
        },
        {
          name: "long",
          ttl: minutes(1),
          limit: 100,
        },
      ],
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ]
})
export class AppModule { }
