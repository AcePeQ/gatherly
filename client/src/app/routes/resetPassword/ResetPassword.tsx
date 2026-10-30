import { motion, useReducedMotion } from "motion/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Navigate, useSearchParams } from "react-router";

import AppLink from "../../../components/link/AppLink";
import Logo from "../../../components/logo/Logo";
import ResetPasswordForm from "../../../features/passwordRecovery/components/resetPasswordForm/ResetPasswordForm";
import {
  authContainerVariants,
  authItemVariants,
} from "../../../utils/animationVariants";

import styles from "./ResetPassword.module.css";

function ResetPassword() {
  const shouldReduceMotion = useReducedMotion();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";

  if (!token) {
    return <Navigate to="/forgot-password" replace />
  }

  return (
    <section className={styles.resetForm}>
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
          <h1 className={styles.title}>Set new password</h1>
          <p className={styles.subTitle}>
            Choose a strong password that you haven't used elsewhere.
          </p>
        </motion.hgroup>

        <motion.div variants={authItemVariants} className={styles.formWrapper}>
          <ResetPasswordForm token={token} />
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

export default ResetPassword;
