import PlaceholderImg from "../assets/images/featureCardPlaceholder.jpg"

export type FeaturedTripCardProps = {
  title?: string;
  image: string;
  badge?: string;
  cardTitle: string;
  startDate: string;
  endDate: string;
  persons: string;
  isButton?: boolean;
  path: string;
}

export const PlaceholderCard1 = {
  title: "Upcoming trip",
  image: PlaceholderImg,
  badge: "In 9 days",
  cardTitle: "Weekend in Gdansk",
  startDate: "2026-10-23",
  endDate: "2026-10-25",
  persons: "4 travelers",
  isButton: true,
  path: "/test/test"
}

export const PlaceholderCard2 = {
  title: "",
  image: PlaceholderImg,
  badge: "",
  cardTitle: "Weekend in Gdansk",
  startDate: "2026-10-23",
  endDate: "2026-10-25",
  persons: "4 travelers",
  isButton: false,
  path: "/test/test"
}
