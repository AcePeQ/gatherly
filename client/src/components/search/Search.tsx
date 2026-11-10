import { useId, type ComponentPropsWithoutRef } from 'react';

import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from './Search.module.css';

type SearchProps = ComponentPropsWithoutRef<"input">

function Search({ ...props }: SearchProps) {
  const id = useId();
  const inputClassName = [
    styles.input,
    props.className
  ].filter(Boolean).join(" ")

  return <div className={styles.wrapper}>
    <span className={styles.magnifyingGlassIcon}>
      <FaMagnifyingGlass aria-hidden={true} focusable={false} />
    </span>
    <input
      {...props}
      type='text'
      id={id}
      name={`search-${id}`}
      className={inputClassName}
    />
  </div>
}

export default Search