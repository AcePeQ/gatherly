import styles from './Search.module.css';

function Search({ placeholder, query, onChange }) {
  return <div className={styles.wrapper}>
    <input placeholder={placeholder} type='text' name='search' />
  </div>
}

export default Search