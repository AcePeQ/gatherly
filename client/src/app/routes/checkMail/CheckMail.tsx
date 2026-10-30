import { motion, useReducedMotion } from "motion/react";
import { CiMail } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

import AppLink from "../../../components/link/AppLink";
import {
  authContainerVariants,
  authItemVariants,
} from "../../../utils/animationVariants";

import styles from "./CheckMail.module.css";

function CheckMail() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`${styles.wrapper} wrapper-padding`}>
      <motion.div
        className={styles.resetWrapper}
        variants={authContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div variants={authItemVariants} className={styles.iconWrapper}>
          <CiMail aria-hidden="true" />
        </motion.div>

        <motion.hgroup variants={authItemVariants} className={styles.hgroup}>
          <h1 className={styles.title}>Check your email</h1>
          <p className={styles.subTitle}>
            If an account with this email exists, you will receive a password
            reset link.
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

export default CheckMail;
