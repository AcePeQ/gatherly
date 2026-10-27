import { z } from "zod";
import { PASSWORD_MIN_LENGTH, PASSWORD_SPECIAL_CHARACTER_PATTERN } from "../../../utils/constants";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter correct email address"),
  password: z.string().min(PASSWORD_MIN_LENGTH, "Password must be at least 8 characters").regex(PASSWORD_SPECIAL_CHARACTER_PATTERN, { message: "Must have one special character" })
});

export type RegisterFormValues = z.infer<typeof registerSchema>;