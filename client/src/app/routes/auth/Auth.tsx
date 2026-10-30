import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import Logo from "../../../components/logo/Logo";
import LoginForm from "../../../features/auth/components/loginForm/LoginForm";
import RegisterForm from "../../../features/auth/components/registerForm/RegisterForm";
import {
  authContainerVariants,
  authItemVariants,
  authPanelVariants,
  menuActiveSliderVariants,
} from "../../../utils/animationVariants";

import styles from "./Auth.module.css";

type AuthMode = "login" | "register";

function Auth() {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const shouldReduceMotion = useReducedMotion();

  function handleAuthModeChange(mode: AuthMode) {
    setAuthMode(mode);
  }

  function handleRegistrationSuccess() {
    setAuthMode("login");
  }

  const isLoginMode = authMode === "login";

  return (
    <section className={styles.formPanel}>
      <motion.div
        className={styles.authContent}
        variants={authContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div
          className={styles.logoWrapper}
          variants={authItemVariants}
        >
          <Logo />
        </motion.div>

        <motion.hgroup variants={authItemVariants} className={styles.titleGroup}>
          <h2 className={styles.title}>
            {isLoginMode ? "Log in to your account" : "Create an account"}
          </h2>
          <p className={styles.subTitle}>
            {isLoginMode
              ? "Welcome back! Please enter your details."
              : "Start your free planning journey!"}
          </p>
        </motion.hgroup>

        <motion.div
          variants={authItemVariants}
          role="group"
          aria-label="Choose authentication mode"
          className={styles.modeSwitcher}
        >
          <button
            type="button"
            aria-pressed={isLoginMode}
            onClick={() => handleAuthModeChange("login")}
            className={`${styles.modeButton} ${isLoginMode ? styles.active : ""}`}
          >
            Log in
          </button>

          <button
            type="button"
            aria-pressed={!isLoginMode}
            onClick={() => handleAuthModeChange("register")}
            className={`${styles.modeButton} ${!isLoginMode ? styles.active : ""}`}
          >
            Sign up
          </button>

          <motion.div
            custom={isLoginMode}
            variants={menuActiveSliderVariants}
            initial="initial"
            animate="animate"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.3, ease: "easeInOut" }
            }
            className={styles.activeIndicator}
            aria-hidden="true"
          />
        </motion.div>

        <motion.div variants={authItemVariants}>
          <AnimatePresence
            mode="wait"
            initial={false}
            custom={shouldReduceMotion}
          >
            <motion.div
              key={authMode}
              custom={shouldReduceMotion}
              variants={authPanelVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {isLoginMode ? (
                <LoginForm />
              ) : (
                <RegisterForm
                  onRegistrationSuccess={handleRegistrationSuccess}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Auth;
