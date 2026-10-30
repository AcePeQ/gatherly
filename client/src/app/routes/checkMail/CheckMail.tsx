import { motion, useReducedMotion } from "motion/react";
import { FaArrowLeftLong } from "react-icons/fa6";

import AppLink from "../../../components/link/AppLink";
import Logo from "../../../components/logo/Logo";
import {
  authContainerVariants,
  authItemVariants,
} from "../../../utils/animationVariants";

import styles from "./CheckMail.module.css";

function CheckMail() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.infoPanel}>
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
          <h1 className={styles.title}>Check your email</h1>
          <p className={styles.subTitle}>
            If an account exists for this address, you'll receive a reset link
            shortly.
          </p>
        </motion.hgroup>

        <motion.p variants={authItemVariants} className={styles.spamText}>
          Check your spam folder too. The link is valid for 15 minutes.
        </motion.p>

        <motion.div variants={authItemVariants}>
          <AppLink to="/">
            <FaArrowLeftLong aria-hidden="true" /> Back to log in
          </AppLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CheckMail;
