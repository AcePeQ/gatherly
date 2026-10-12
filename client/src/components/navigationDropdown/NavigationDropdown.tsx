import type { NavigationDropdownItem } from '../../types/navigation';
import NavigationLink from '../navigationLink/NavigationLink';
import styles from './NavigationDropdown.module.css';
function NavigationDropdown({ label, icon, children }: NavigationDropdownItem) {
  const Icon = icon;

  return (
    <div>
      <button className={styles.navButton}>
        {Icon &&
          <span className={styles.iconWrapper}><Icon /></span>
        }
        {label}
      </button>

      <ul>
        {children.map(navigationLink => <NavigationLink type={navigationLink.type}
          label={navigationLink.label} icon={navigationLink.icon} path={navigationLink.path} />)}
      </ul>
    </div>
  )
}

export default NavigationDropdown