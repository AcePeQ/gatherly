import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Enter correct email address"),
  password: z.string().min(1, "Enter password"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;