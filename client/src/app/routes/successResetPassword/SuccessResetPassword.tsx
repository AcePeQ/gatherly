import Link from '../../../components/link/Link';
import { motion, useReducedMotion } from "motion/react"
import styles from './SuccessResetPassword.module.css';

import { authContainerVariants, authItemVariants } from '../../../utils/animationVariants';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

function SuccessResetPassword() {
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
          <IoCheckmarkCircleOutline />
        </motion.div>

        <motion.hgroup
          variants={authItemVariants}
          className={styles.hgroup}
        >
          <h1 className={styles.title}>Password reset</h1>
          <p className={styles.subTitle}>Your password has been successfully reset.<br />Click below to log in.</p>
        </motion.hgroup>

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

export default SuccessResetPassword