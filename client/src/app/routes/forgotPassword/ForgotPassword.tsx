import AppLink from '../../../components/link/AppLink';
import ForgotPasswordForm from '../../../features/passwordRecovery/components/forgotPasswordForm/ForgotPasswordForm';
import { motion, useReducedMotion } from "motion/react"
import styles from './ForgotPassword.module.css';

import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../../assets/images/icons/logo.png"

import { authContainerVariants, authItemVariants } from '../../../utils/animationVariants';


function ForgotPassword() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.formPanel}>
      <motion.div
        className={styles.resetWrapper}
        variants={authContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.img variants={authItemVariants} className={styles.logo} src={logo} alt="" />

        <motion.hgroup
          variants={authItemVariants}
          className={styles.hgroup}
        >
          <h1 className={styles.title}>Forgot your password?</h1>
          <p className={styles.subTitle}>Enter your email and we'll send you a reset link.</p>
        </motion.hgroup>

        <motion.div variants={authItemVariants} className={styles.formWrapper}>
          <ForgotPasswordForm />
        </motion.div>

        <motion.div variants={authItemVariants}>
          <AppLink to="/">
            <>
              <FaArrowLeftLong aria-hidden /> Back to log in
            </>
          </AppLink>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ForgotPassword
