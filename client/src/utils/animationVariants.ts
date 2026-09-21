import type { Variants } from "motion/react";

export const menuActiveSliderVariants = {
  initial: (isLoginMode: boolean) => ({
    x: isLoginMode ? "100%" : "0%"
  }),
  animate: (isLoginMode: boolean) => ({
    x: isLoginMode ? "100%" : "0%"
  })
}

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const authContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
};

export const authItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: smoothEase,
    },
  },
};

export const authPanelVariants: Variants = {
  enter: (shouldReduceMotion: boolean) => ({
    opacity: shouldReduceMotion ? 1 : 0,
    y: shouldReduceMotion ? 0 : 8,
  }),
  center: (shouldReduceMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.22, ease: smoothEase },
  }),
  exit: (shouldReduceMotion: boolean) => ({
    opacity: shouldReduceMotion ? 1 : 0,
    y: shouldReduceMotion ? 0 : -6,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.14, ease: "easeOut" },
  }),
};
