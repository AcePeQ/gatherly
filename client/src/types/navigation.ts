import type { IconType } from "react-icons/lib";

type NavigationItemBase = {
  label: string;
  icon?: IconType
}

export type NavigationLinkItem = NavigationItemBase & {
  type: "link";
  path: string;
  end?: boolean;
}

export type NavigationDropdownItem = NavigationItemBase & {
  type: "dropdown";
  children: NavigationLinkItem[];
}

export type MainNavigationItem = NavigationLinkItem | NavigationDropdownItem;
export type MainNavigation = MainNavigationItem[];