import type { MainNavigation } from "../types/navigation";

import { MdSpaceDashboard } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export const mainNavigation: MainNavigation = [
  { type: "link", path: "/dashboard", label: "Dashboard", icon: MdSpaceDashboard },
  {
    type: "dropdown", label: "Trips", children: [
      { type: "link", path: "/trips", end: true, label: "All Trips", icon: FaList },
      { type: "link", path: "/trips/create", label: "Create a trip", icon: FaPlus }
    ],
    icon: GiJourney
  },
  { type: "link", path: "/tasks", label: "Tasks", icon: FaTasks },
  { type: "link", path: "/settings", label: "Settings", icon: IoMdSettings }
]