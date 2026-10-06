import { z } from "zod";

export const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/, { message: "Must have one special character" }),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters").regex(/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/, { message: "Must have one special character" }),
  token: z.string().min(1, "Invalid or missing reset token")
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    })
  }
});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
