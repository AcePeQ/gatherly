import { z } from "zod";
import { PASSWORD_MIN_LENGTH, PASSWORD_SPECIAL_CHARACTER_PATTERN } from "../../../utils/constants";

export const resetPasswordSchema = z.object({
  password: z.string().min(PASSWORD_MIN_LENGTH, "Password must be at least 8 characters").regex(PASSWORD_SPECIAL_CHARACTER_PATTERN, { message: "Must have one special character" }),
  confirmPassword: z.string().min(1, "Confirm password must be filled")
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match",
      path: ['confirmPassword']
    })
  }
});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
