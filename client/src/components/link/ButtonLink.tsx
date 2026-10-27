import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router";

import actionStyles from "../Action.module.css";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = RouterLinkProps & {
  variant: ButtonLinkVariant;
};

function ButtonLink({ variant, className, ...linkProps }: ButtonLinkProps) {
  const linkClassName = [
    actionStyles.action,
    actionStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <RouterLink {...linkProps} className={linkClassName} />;
}

export default ButtonLink;
