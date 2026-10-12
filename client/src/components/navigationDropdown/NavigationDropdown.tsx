import type { NavigationDropdownItem } from '../../types/navigation';
import { IoIosArrowDown } from "react-icons/io";
import NavigationLink from '../navigationLink/NavigationLink';
import styles from './NavigationDropdown.module.css';
import { motion } from 'motion/react';
import { useId, useState } from 'react';
import { useLocation } from 'react-router';

function NavigationDropdown({ label, icon, children }: NavigationDropdownItem) {
  const location = useLocation();

  const hasActiveChild = children.some(
    (link) =>
      location.pathname === link.path ||
      location.pathname.startsWith(`${link.path}/`)
  );

  const [isOpen, setIsOpen] = useState(hasActiveChild);

  const Icon = icon;
  const dropdownId = useId();

  function toggleDropdown() {
    setIsOpen(prev => !prev)
  }

  return (
    <li className={styles.dropdownWrapper}>
      <button
        type='button'
        aria-expanded={isOpen} aria-controls={dropdownId}
        onClick={toggleDropdown} className={styles.navButton}
      >
        {Icon &&
          <span aria-hidden="true" className={styles.iconWrapper}><Icon /></span>
        }
        {label}


        <motion.span aria-hidden="true" initial={{ rotate: isOpen ? "180deg" : "0deg" }}
          animate={{ rotate: isOpen ? "180deg" : "0deg" }} className={styles.closeIconWrapper}>
          <IoIosArrowDown />
        </motion.span>
      </button>


      <motion.div id={dropdownId}
        inert={!isOpen}
        aria-hidden={!isOpen}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        style={{ overflow: "hidden" }}>
        <ul className={styles.dropdownItems} >
          {children.map(navigationLink => <NavigationLink key={navigationLink.path} type={navigationLink.type}
            label={navigationLink.label} icon={navigationLink.icon} path={navigationLink.path} />)}
        </ul>
      </motion.div>

    </li >
  )
}

export default NavigationDropdown