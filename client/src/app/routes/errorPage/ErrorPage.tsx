import { isRouteErrorResponse, useRouteError } from 'react-router';
import { LuTriangleAlert } from 'react-icons/lu';

import AnimatedOrb from '../../../components/animatedOrb/AnimatedOrb';
import Button from '../../../components/button/Button';
import ButtonLink from '../../../components/link/ButtonLink';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  const error = useRouteError();
  const statusCode = isRouteErrorResponse(error) ? error.status : 500;

  function handleRetry() {
    window.location.reload();
  }

  return (
    <main className={styles.wrapper}>
      <section className={`${styles.content} wrapper-padding`} role="alert">
        <AnimatedOrb
          position="top-left"
          size="medium"
          rotateSpeed={28000}
          speedX={3400}
          xMove={28}
          speedY={3000}
          yMove={22}
          scaleSpeed={3200}
          scaleRate={0.1}
        />
        <AnimatedOrb
          position="bottom-right"
          size="large"
          rotateSpeed={34000}
          speedX={4200}
          xMove={18}
          speedY={3600}
          yMove={24}
          scaleSpeed={3800}
          scaleRate={0.08}
        />

        <div className={styles.contentInner}>
          <span className={styles.eyebrow}>Error {statusCode}</span>
          <h1>Something went wrong</h1>
          <p>
            We couldn't load this page right now. Try again, or return home and
            continue from there.
          </p>

          <div className={styles.actions}>
            <Button type="ghost" onClick={handleRetry}>Try again</Button>
            <ButtonLink type="primary" path="/">Take me home</ButtonLink>
          </div>
        </div>
      </section>

      <section className={styles.visual} aria-hidden="true">
        <div className={styles.glow} />
        <div className={styles.errorCard}>
          <div className={styles.iconWrapper}>
            <LuTriangleAlert />
          </div>
          <strong>{statusCode}</strong>
          <span>Unexpected error</span>
        </div>
      </section>
    </main>
  )
}

export default ErrorPage
