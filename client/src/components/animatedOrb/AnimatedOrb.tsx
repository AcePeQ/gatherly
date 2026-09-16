import styles from './AnimatedOrb.module.css';
import { useTime, useTransform, motion } from "motion/react"


type AnimatedOrbProps = {
  rotateSpeed: number,
  speedX: number,
  xMove: number,
  speedY: number,
  yMove: number,
  scaleSpeed: number,
  scaleRate: number,
  position: "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right",
  size: "small" | "medium" | "large"
}

function AnimatedOrb({ rotateSpeed, speedX, xMove, speedY, yMove, scaleSpeed, scaleRate, position, size }: AnimatedOrbProps) {
  const time = useTime();

  const rotate = useTransform(time, (latest) => {
    return ((latest % rotateSpeed) / rotateSpeed) * 360
  })

  const x = useTransform(time, (latest) => {
    return Math.sin(latest / speedX) * xMove
  })

  const y = useTransform(time, (latest) => {
    return Math.cos(latest / speedY) * yMove
  })

  const scale = useTransform(time, (latest) => {
    return 1 + Math.sin(latest / scaleSpeed) * scaleRate
  })

  return (
    <motion.div aria-hidden="true" className={`${styles.orb} ${styles[position]} ${styles[size]}`} style={{
      x,
      y,
      scale,
      rotate
    }} />
  )
}

export default AnimatedOrb
