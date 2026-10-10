import AnimatedOrb from '../../animatedOrb/AnimatedOrb';
import styles from './FullLoader.module.css';
import { ClipLoader } from "react-spinners";

function FullLoader() {
  return (
    <div className={`${styles.wrapper} no-scroll`}>
      <AnimatedOrb
        position="center-right"
        size="small"
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

      <AnimatedOrb
        position="top-center"
        size="medium"
        rotateSpeed={32000}
        speedX={4000}
        xMove={100}
        speedY={3500}
        yMove={-200}
        scaleSpeed={2200}
        scaleRate={0.20}
      />

      <ClipLoader color="#36d7b7" aria-label='Loading Spinner' size={100} speedMultiplier={0.5} />
    </div>
  )
}

export default FullLoader
