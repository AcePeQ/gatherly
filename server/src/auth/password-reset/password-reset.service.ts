import { Injectable } from '@nestjs/common';
import { db } from '../../prisma/db.js';

type CreatePasswordResetTokenInput = {
  tokenHash: string;
  expiresAt: string;
  userId: number;
};

type ConsumePasswordResetTokenInput = {
  tokenHash: string;
  passwordHash: string;
  usedAt: string;
};

@Injectable()
export class PasswordResetService {
  createToken({
    tokenHash,
    expiresAt,
    userId,
  }: CreatePasswordResetTokenInput) {
    return db.orm.public.PasswordResetToken.create({
      tokenHash,
      expiresAt,
      userId,
    });
  }

  async consumeTokenAndUpdatePassword({
    tokenHash,
    passwordHash,
    usedAt,
  }: ConsumePasswordResetTokenInput): Promise<boolean> {
    return db.transaction(async (tx) => {
      const consumedToken = await tx.orm.public.PasswordResetToken
        .where((resetToken) => resetToken.tokenHash.eq(tokenHash))
        .where((resetToken) => resetToken.usedAt.isNull())
        .where((resetToken) => resetToken.expiresAt.gt(usedAt))
        .select('userId')
        .update({ usedAt });

      if (!consumedToken) {
        return false;
      }

      const updatedUser = await tx.orm.public.User
        .where({ id: consumedToken.userId })
        .update({ passwordHash });

      if (!updatedUser) {
        throw new Error('Password reset token references a missing user');
      }

      return true;
    });
  }
}
