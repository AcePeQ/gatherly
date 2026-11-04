import { useNavigate } from "react-router";

import AnimatedOrb from "../../../components/animatedOrb/AnimatedOrb";
import BrandPanel from "../../../components/brandPanel/BrandPanel";
import Button from "../../../components/button/Button";
import ButtonLink from "../../../components/link/ButtonLink";

import styles from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className={`${styles.wrapper} container`}>
      <BrandPanel />
      <div className={`${styles.left} wrapper-padding`}>
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
          scaleRate={0.2}
        />
        <div className={styles.leftWrapper}>
          <h1>Page not found</h1>
          <p>
            Sorry, the page you are looking for doesn't exist or has been
            moved. Here are some helpful links:
          </p>

          <div className={styles.btnWrapper}>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Go back
            </Button>
            <ButtonLink variant="primary" to="/">
              Take me home
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
