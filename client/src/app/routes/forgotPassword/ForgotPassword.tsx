import { motion, useReducedMotion } from "motion/react";
import { FaArrowLeftLong } from "react-icons/fa6";

import AppLink from "../../../components/link/AppLink";
import Logo from "../../../components/logo/Logo";
import ForgotPasswordForm from "../../../features/passwordRecovery/components/forgotPasswordForm/ForgotPasswordForm";
import {
  authContainerVariants,
  authItemVariants,
} from "../../../utils/animationVariants";

import styles from "./ForgotPassword.module.css";

function ForgotPassword() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.formPanel}>
      <motion.div
        className={styles.content}
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

        <motion.hgroup variants={authItemVariants} className={styles.hgroup}>
          <h1 className={styles.title}>Forgot your password?</h1>
          <p className={styles.subTitle}>
            Enter your email and we'll send you a reset link.
          </p>
        </motion.hgroup>

        <motion.div variants={authItemVariants} className={styles.formWrapper}>
          <ForgotPasswordForm />
        </motion.div>

        <motion.div variants={authItemVariants}>
          <AppLink to="/">
            <FaArrowLeftLong aria-hidden="true" /> Back to log in
          </AppLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ForgotPassword;
