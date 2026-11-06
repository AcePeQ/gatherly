import placeholderImage from "../../../assets/images/featureCardPlaceholder.jpg";
import type { TripPreview } from "../types/tripPreview";

export const featuredTripMock: TripPreview = {
  id: 1,
  imageUrl: placeholderImage,
  title: "Weekend in Gdansk",
  startDate: "2027-04-23",
  endDate: "2027-04-25",
  travelersCount: 4,
  place: "Gdansk, Poland",
};

export const upcomingTripsMock: TripPreview[] = [
  {
    id: 2,
    imageUrl: placeholderImage,
    title: "City break in Prague",
    startDate: "2027-05-14",
    endDate: "2027-05-17",
    travelersCount: 2,
    place: "Prague, Czechia",
  },
  {
    id: 3,
    imageUrl: placeholderImage,
    title: "Summer in Lisbon",
    startDate: "2027-07-08",
    endDate: "2027-07-15",
    travelersCount: 3,
    place: "Lisbon, Portugal",
  },
];
