import type { MainNavigation } from "../types/navigation";

import { RxDashboard } from "react-icons/rx";
import { GiJourney } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { FaList } from "react-icons/fa";

export const mainNavigation: MainNavigation = [
  { type: "link", path: "/dashboard", label: "Dashboard", icon: RxDashboard },
  {
    type: "dropdown", label: "Trips", children: [
      { type: "link", path: "/trips", end: true, label: "All Trips", icon: FaList },
      { type: "link", path: "/trips/create", label: "Create a trip", icon: IoMdCreate }
    ],
    icon: GiJourney
  },
  { type: "link", path: "/tasks", label: "Tasks", icon: FaTasks },
  { type: "link", path: "/settings", label: "Settings", icon: IoMdSettings }
]