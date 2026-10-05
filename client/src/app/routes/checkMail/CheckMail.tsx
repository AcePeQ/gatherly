import Link from '../../../components/link/Link';
import { motion, useReducedMotion } from "motion/react"
import styles from './CheckMail.module.css';

import { CiMail } from "react-icons/ci";
import { authContainerVariants, authItemVariants } from '../../../utils/animationVariants';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate, useSearchParams } from 'react-router';
import { useEffect } from 'react';

function CheckMail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const shouldReduceMotion = useReducedMotion();

  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password", { replace: true })
    }
  }, [email, navigate])

  return (
    <section className={`${styles.wrapper} wrapper-padding`}>
      <motion.div
        className={styles.resetWrapper}
        variants={authContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div variants={authItemVariants} className={styles.iconWrapper}>
          <CiMail />
        </motion.div>

        <motion.hgroup
          variants={authItemVariants}
          className={styles.hgroup}
        >
          <h1 className={styles.title}>Check your email</h1>
          <p className={styles.subTitle}>We sent a password reset link to {email}</p>
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

export default CheckMail