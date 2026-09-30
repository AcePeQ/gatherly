import Link from '../../../components/link/Link';
import ForgotPasswordForm from '../../../features/passwordRecovery/components/forgotPasswordForm/ForgotPasswordForm';
import { motion, useReducedMotion } from "motion/react"
import styles from './ForgotPassword.module.css';

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { authContainerVariants, authItemVariants } from '../../../utils/animationVariants';


function ForgotPassword() {
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
          <FaKey />
        </motion.div>

        <motion.hgroup
          variants={authItemVariants}
          className={styles.hgroup}
        >
          <h1 className={styles.title}>Forgot password?</h1>
          <p className={styles.subTitle}>No worries, we'll send you reset instructions.</p>
        </motion.hgroup>

        <motion.div variants={authItemVariants} className={styles.formWrapper}>
          <ForgotPasswordForm />
        </motion.div>

        <motion.div variants={authItemVariants}>
          <Link path='/'>
            <>
              <FaArrowLeftLong /> Back to log in
            </>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ForgotPassword
