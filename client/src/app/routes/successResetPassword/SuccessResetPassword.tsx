import { motion, useReducedMotion } from "motion/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import AppLink from "../../../components/link/AppLink";
import {
  authContainerVariants,
  authItemVariants,
} from "../../../utils/animationVariants";

import styles from "./SuccessResetPassword.module.css";
import { Navigate, useLocation } from "react-router";

type PasswordResetSuccessState = {
  passwordResetSucceeded: boolean;
};

function SuccessResetPassword() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const state = location.state as PasswordResetSuccessState | null;

  if (!state?.passwordResetSucceeded) {
    return <Navigate to="/" replace />
  }

  return (
    <section className={`${styles.wrapper} wrapper-padding`}>
      <motion.div
        className={styles.resetWrapper}
        variants={authContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div variants={authItemVariants} className={styles.iconWrapper}>
          <IoCheckmarkCircleOutline aria-hidden="true" />
        </motion.div>

        <motion.hgroup variants={authItemVariants} className={styles.hgroup}>
          <h1 className={styles.title}>Password reset</h1>
          <p className={styles.subTitle}>
            Your password has been successfully reset.
            <br />
            Click below to log in.
          </p>
        </motion.hgroup>

        <motion.div variants={authItemVariants}>
          <AppLink to="/">
            <FaArrowLeftLong aria-hidden="true" /> Back to log in
          </AppLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SuccessResetPassword;
