import { useState } from 'react';
import { motion } from "motion/react"

import styles from './Auth.module.css';
import Button from '../../../components/button/Button';

const menuBgVariants = {
  initial: (isLoginMode: boolean) => ({
    x: isLoginMode ? "100%" : "0%"
  }),
  animate: (isLoginMode: boolean) => ({
    x: isLoginMode ? "100%" : "0%"
  })
}

function Auth() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  function changeAuthMode(mode: "login" | "register") {
    setAuthMode(mode);
  }

  const isLoginMode = authMode === "login";
  return (
    <section className={styles.wrapper}>
      <div className={styles.authWrapper}>
        <div>LOGO</div>

        <hgroup className={styles.titleGroup}>
          <h1 className={styles.title}>{isLoginMode ? "Log in to your account" : "Create and account"}</h1>
          <p className={styles.subTitle}>{isLoginMode ? "Welcome back! Please enter your details." : "Start your free planning journey!"}</p>
        </hgroup>

        <menu className={styles.menu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <button onClick={() => changeAuthMode("register")} className={styles.menuButton}>Sign up</button>
            </li>
            <li className={styles.menuItem}>
              <button onClick={() => changeAuthMode("login")} className={styles.menuButton}>Log in</button>
            </li>

            <motion.div custom={isLoginMode} variants={menuBgVariants} initial="initial" animate="animate" className={styles.menuActiveBg} aria-hidden="true" />
          </ul>
        </menu>

        <p className={styles.additionalAction}>
          {isLoginMode ? <>
            Don't have an account? <Button type='link' onClick={() => changeAuthMode("register")}>Sign up</Button>
          </> : <>
            Already have an account? <Button type='link' onClick={() => changeAuthMode("login")}>Log in</Button>
          </>}
        </p>
      </div>
    </section>
  )
}

export default Auth