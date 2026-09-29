import Link from '../../../components/link/Link';
import ResetPasswordForm from '../../../features/resetPassword/components/resetPasswordForm/ResetPasswordForm';
import styles from './ForgotPassword.module.css';

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";


function ForgotPassword() {
  return (
    <section className={`${styles.wrapper} wrapper-padding`}>
      <div className={styles.resetWrapper}>
        <div className={styles.iconWrapper}>
          <FaKey />
        </div>

        <hgroup className={styles.hgroup}>
          <h1 className={styles.title}>Forgot password?</h1>
          <p className={styles.subTitle}>No worries, we'll send you reset instructions.</p>
        </hgroup>

        <div className={styles.formWrapper}>
          <ResetPasswordForm />
        </div>
        <Link path='/'>
          <>
            <FaArrowLeftLong /> Back to log in
          </>
        </Link>
      </div>
    </section>
  )
}

export default ForgotPassword