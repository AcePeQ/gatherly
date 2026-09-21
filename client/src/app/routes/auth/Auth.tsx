import { useState } from 'react';
import { motion } from "motion/react"

import styles from './Auth.module.css';
import Button from '../../../components/button/Button';
import LoginForm from '../../../features/auth/components/loginForm/LoginForm';

import Logo from "../../../assets/images/icons/whiteLogoFull.png"
import { menuActiveSliderVariants } from '../../../utils/animationVariants';

function Auth() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  function changeAuthMode(mode: "login" | "register") {
    setAuthMode(mode);
  }

  const isLoginMode = authMode === "login";
  return (
    <section className={styles.wrapper}>
      <div className={styles.authWrapper}>
        <img className={styles.logo} src={Logo} alt='' />

        <hgroup className={styles.titleGroup}>
          <h1 className={styles.title}>{isLoginMode ? "Log in to your account" : "Create and account"}</h1>
          <p className={styles.subTitle}>{isLoginMode ? "Welcome back! Please enter your details." : "Start your free planning journey!"}</p>
        </hgroup>

        <div role='group' aria-label='Choose authentication mode' className={styles.menuList}>
          <button type='button' aria-pressed={!isLoginMode} onClick={() => changeAuthMode("register")}
            className={`${styles.menuButton} ${!isLoginMode ? styles.active : ""}`}>Sign up</button>

          <button type='button' aria-pressed={isLoginMode} onClick={() => changeAuthMode("login")}
            className={`${styles.menuButton} ${isLoginMode ? styles.active : ""}`}>Log in</button>

          <motion.div custom={isLoginMode} variants={menuActiveSliderVariants} initial="initial" animate="animate"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.menuActiveBg} aria-hidden="true" />
        </div>

        <LoginForm />

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