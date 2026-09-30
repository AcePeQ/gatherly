import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("Enter correct email address"),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
