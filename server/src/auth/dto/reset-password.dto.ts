import { z } from 'zod';

export const resetPasswordSchema = z.object({
  password: z.email('Enter correct email address'),
  token: z.string("Enter correct token")
});

export type ResetPasswordDto = z.infer<typeof resetPasswordSchema>;
