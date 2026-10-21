import { z } from "zod";

export const createTripSchema = z.object({
  name: z.string().trim().min(1, "Enter the trip name").max(50, "Trip name must be at most 50 characters"),
  place: z.string().trim().min(1, "Enter the trip's place").max(100, "Trip place must be at most 100 characters"),
  startDate: z.iso.date(),
  endDate: z.iso.date(),
  description: z.string().max(1500, "Description must be at most 1500 characters").optional(),
  coverUrl: z.httpUrl().optional(),
}).refine(data => data.startDate <= data.endDate, {
  error: "Trip cannot end before it starts",
  path: ["endDate"]
});

export type CreateTripDto = z.infer<typeof createTripSchema>;