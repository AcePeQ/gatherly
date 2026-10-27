import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router";

import styles from "./Link.module.css";

type AppLinkProps = RouterLinkProps;

function AppLink({ className, ...linkProps }: AppLinkProps) {
  const linkClassName = [styles.link, className].filter(Boolean).join(" ");

  return <RouterLink {...linkProps} className={linkClassName} />;
}

export default AppLink;
