import { z } from "zod";

export const createTripSchema = z.object({
  tripName: z.string().trim().min(1, "Enter the trip name"),
  destination: z.string().trim().min(1, "Enter the destination"),
  startDate: z.iso.date(),
  endDate: z.iso.date(),
  description: z.string().trim().optional(),
  coverImageUrl: z.url().optional(),
}).superRefine((data, context) => {
  if (data.endDate < data.startDate) {
    context.addIssue({
      code: "custom",
      path: ["endDate"],
      message: "End date cannot be earlier than start date"
    })
  }
});

export type CreateTripValues = z.infer<typeof createTripSchema>;