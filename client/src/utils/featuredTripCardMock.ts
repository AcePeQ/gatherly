import PlaceholderImg from "../assets/images/featureCardPlaceholder.jpg"

export type FeaturedTripCardType = {
  image: string;
  badge: string;
  cardTitle: string;
  startDate: string;
  endDate: string;
  persons: string;
  place: string;
  path: string;
}

export type FeaturedTripCardProps = FeaturedTripCardType & {
  isFeaturedCard?: boolean;
}

export const PlaceholderCard1 = {
  image: PlaceholderImg,
  badge: "In 9 days",
  cardTitle: "Weekend in Gdansk",
  startDate: "2026-10-23",
  endDate: "2026-10-25",
  persons: "4 travelers",
  path: "/test/test",
  place: "Gdansk, Poland"
}
