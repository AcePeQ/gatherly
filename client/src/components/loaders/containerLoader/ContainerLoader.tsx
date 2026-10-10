import { ClipLoader } from "react-spinners";
import styles from './ContainerLoader.module.css';

type ContainerLoaderProps = {
  color?: string;
  label?: string;
  size?: number | string;
}

function ContainerLoader({
  color = "currentColor",
  label = "Loading",
  size = "1.25em",
}: ContainerLoaderProps) {
  return (
    <span className={styles.loader} role="status" aria-label={label}>
      <ClipLoader
        aria-hidden="true"
        color={color}
        size={size}
        speedMultiplier={0.5}
      />
    </span>
  )
}

export default ContainerLoader
