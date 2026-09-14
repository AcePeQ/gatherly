import styles from './NotFound.module.css';

import background404 from "../../../assets/images/backgrounds/background404.png"
import Button from '../../../components/button/Button';
import ButtonLink from '../../../components/link/ButtonLink';

function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for doesn't exist or has been moved. Here are some helpful links:</p>

        <div className={styles.btnWrapper}>
          <Button type='ghost' onClick={() => { }}>Go back</Button>
          <ButtonLink type='primary' path='/dashboard'>Take me home</ButtonLink>
        </div>
      </div>
      <div className={styles.right}>
        <img src={background404} alt='' />
      </div>
    </section>
  )
}

export default NotFound