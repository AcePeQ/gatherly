import { z } from "zod";

export const createTripSchema = z.object({
  tripName: z.string(),
  destination: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string().optional(),
  coverImageUrl: z.url().optional(),
});

export type CreateTripValues = z.infer<typeof createTripSchema>;