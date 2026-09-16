import styles from './NotFound.module.css';

import background404 from "../../../assets/images/backgrounds/background404.png"
import Button from '../../../components/button/Button';
import ButtonLink from '../../../components/link/ButtonLink';
import AnimatedOrb from '../../../components/animatedOrb/AnimatedOrb';

function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <AnimatedOrb
          position="center-right"
          size="large"
          rotateSpeed={20000}
          speedX={2400}
          xMove={12}
          speedY={3200}
          yMove={16}
          scaleSpeed={2800}
          scaleRate={0.12}
        />
        <AnimatedOrb
          position="bottom-left"
          size="medium"
          rotateSpeed={26000}
          speedX={3400}
          xMove={16}
          speedY={2600}
          yMove={12}
          scaleSpeed={3600}
          scaleRate={0.08}
        />
        <AnimatedOrb
          position="top-left"
          size="medium"
          rotateSpeed={32000}
          speedX={4000}
          xMove={100}
          speedY={3500}
          yMove={50}
          scaleSpeed={2200}
          scaleRate={0.20}
        />
        <div className={styles.leftWrapper}>
          <h1>Page not found</h1>
          <p>Sorry, the page you are looking for doesn't exist or has been moved. Here are some helpful links:</p>

          <div className={styles.btnWrapper}>
            <Button type='ghost' onClick={() => { }}>Go back</Button>
            <ButtonLink type='primary' path='/dashboard'>Take me home</ButtonLink>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img src={background404} alt='' />
      </div>
    </section>
  )
}

export default NotFound
