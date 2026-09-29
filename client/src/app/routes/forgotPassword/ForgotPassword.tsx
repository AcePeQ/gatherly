import Link from '../../../components/link/Link';
import styles from './ForgotPassword.module.css';

function ForgotPassword() {
  return (
    <section className={`${styles.wrapper} wrapper-padding`}>
      <hgroup className={styles.hgroup}>
        <h1 className={styles.title}>Forgot password?</h1>
        <p className={styles.subTitle}>No worries, we'll send you reset instructions.</p>
      </hgroup>


      <Link path='/'>Back to log in</Link>
    </section>
  )
}

export default ForgotPassword