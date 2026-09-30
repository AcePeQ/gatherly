import { z } from "zod";

export const resetPasswordSchema = z.object({
  email: z.email("Enter correct email address"),
});

export type ResetPasswordDto = z.infer<typeof resetPasswordSchema>;