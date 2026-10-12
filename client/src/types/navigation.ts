import type { ReactElement } from "react";

type NavigationItemBase = {
  label: string;
  icon?: ReactElement
}

type NavigationLinkItem = NavigationItemBase & {
  type: "link";
  path: string;
}

type NavigationDropdownItem = NavigationItemBase & {
  type: "dropdown";
  children: NavigationLinkItem[];
}

export type MainNavigationItem = NavigationLinkItem | NavigationDropdownItem;
export type MainNavigation = MainNavigationItem[];