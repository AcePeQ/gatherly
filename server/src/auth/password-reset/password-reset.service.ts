import { Injectable } from '@nestjs/common';
import { db, type Tx } from '../../prisma/db.js';

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
  private deleteUnusedTokensForUser(tx: Tx, userId: number) {
    return tx.orm.public.PasswordResetToken
      .where({ userId })
      .where((resetToken) => resetToken.usedAt.isNull())
      .deleteAndCount();
  }

  createToken({
    tokenHash,
    expiresAt,
    userId,
  }: CreatePasswordResetTokenInput) {
    return db.transaction(async tx => {
      await this.deleteUnusedTokensForUser(tx, userId);

      return tx.orm.public.PasswordResetToken.create({
        tokenHash,
        expiresAt,
        userId,
      });
    })
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

      const user = await tx.orm.public.User
        .where({ id: consumedToken.userId })
        .select("sessionVersion")
        .first();

      if (!user) {
        throw new Error("Password reset token references a missing user");
      }

      await this.deleteUnusedTokensForUser(tx, consumedToken.userId);

      const updatedUser = await tx.orm.public.User
        .where({ id: consumedToken.userId })
        .update({ passwordHash, sessionVersion: user.sessionVersion + 1 });

      if (!updatedUser) {
        throw new Error('Password reset token references a missing user.');
      }

      return true;
    });
  }
}
