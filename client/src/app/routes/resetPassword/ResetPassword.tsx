import styles from './ResetPassword.module.css';

import Link from '../../../components/link/Link';
import { motion, useReducedMotion } from "motion/react"
import ResetPasswordForm from '../../../features/passwordRecovery/components/resetPasswordForm/ResetPasswordForm';

import { FaArrowLeftLong } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { authContainerVariants, authItemVariants } from '../../../utils/animationVariants';


function ResetPassword() {
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
          <CiLock />
        </motion.div>

        <motion.hgroup
          variants={authItemVariants}
          className={styles.hgroup}
        >
          <h1 className={styles.title}>Set new password</h1>
          <p className={styles.subTitle}>Your new password must be different to previously used password.</p>
        </motion.hgroup>

        <motion.div variants={authItemVariants} className={styles.formWrapper}>
          <ResetPasswordForm />
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

export default ResetPassword