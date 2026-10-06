import { z } from 'zod';

export const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/, { message: "Must have one special character" }),
  token: z.string().min(1, "Enter correct token"),
});

export type ResetPasswordDto = z.infer<typeof resetPasswordSchema>;
