import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { type CreateTripDto, createTripSchema } from "./dto/create-trip.dto.js";
import { TripsService } from "./trips.service.js";
import { AuthGuard } from "../auth/auth.guard.js";
import { type AuthenticatedRequest } from "../users/dto/user.dto.js";

@Controller("trips")
export class TripsController {
  constructor(private readonly tripsService: TripsService) { }

  @UseGuards(AuthGuard)
  @Post()
  async createTrip(@Body({ schema: createTripSchema }) tripData: CreateTripDto, @Req() req: AuthenticatedRequest) {
    return this.tripsService.createTrip(tripData, req.user.id)
  }
}