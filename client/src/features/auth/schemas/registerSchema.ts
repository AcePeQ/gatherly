import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter correct email address"),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/, { message: "Must have one special character" })
});

export type RegisterFormValues = z.infer<typeof registerSchema>;