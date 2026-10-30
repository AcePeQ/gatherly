import type { ComponentPropsWithoutRef } from "react";

import defaultLogo from "../../assets/images/icons/logo.png";
import lightLogo from "../../assets/images/icons/whiteLogoFull.png";

import styles from "./Logo.module.css";

type LogoVariant = "default" | "light";

type LogoProps = Omit<ComponentPropsWithoutRef<"img">, "src"> & {
  variant?: LogoVariant;
};

const logoSources: Record<LogoVariant, string> = {
  default: defaultLogo,
  light: lightLogo,
};

function Logo({
  variant = "default",
  alt = "Gatherly",
  className,
  ...imageProps
}: LogoProps) {
  const logoClassName = [styles.logo, className].filter(Boolean).join(" ");

  return (
    <img
      {...imageProps}
      src={logoSources[variant]}
      alt={alt}
      className={logoClassName}
      draggable={false}
    />
  );
}

export default Logo;
