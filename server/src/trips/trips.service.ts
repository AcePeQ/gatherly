import { Injectable } from "@nestjs/common";
import { CreateTripDto } from "./dto/create-trip.dto.js";
import { AuthenticatedRequest } from "../users/dto/user.dto.js";

@Injectable()
export class TripsService {
  constructor() { }

  async createTrip(data: CreateTripDto, userID: number) {

  }
}