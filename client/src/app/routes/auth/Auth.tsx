import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import styles from './Auth.module.css';
import Button from '../../../components/button/Button';
import LoginForm from '../../../features/auth/components/loginForm/LoginForm';

import Logo from "../../../assets/images/icons/whiteLogoFull.png"
import {
  authContainerVariants,
  authItemVariants,
  authPanelVariants,
  menuActiveSliderVariants,
} from '../../../utils/animationVariants';
import RegisterForm from '../../../features/auth/components/registerForm/RegisterForm';

function Auth() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const shouldReduceMotion = useReducedMotion();

  function changeAuthMode(mode: "login" | "register") {
    setAuthMode(mode);
  }

  const isLoginMode = authMode === "login";
  return (
    <section className={styles.wrapper}>
      <motion.div
        className={styles.authWrapper}
        variants={authContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.img variants={authItemVariants} className={styles.logo} src={Logo} alt='' />

        <motion.hgroup variants={authItemVariants} className={styles.titleGroup}>
          <h1 className={styles.title}>{isLoginMode ? "Log in to your account" : "Create and account"}</h1>
          <p className={styles.subTitle}>{isLoginMode ? "Welcome back! Please enter your details." : "Start your free planning journey!"}</p>
        </motion.hgroup>

        <motion.div variants={authItemVariants} role='group' aria-label='Choose authentication mode' className={styles.menuList}>
          <button type='button' aria-pressed={!isLoginMode} onClick={() => changeAuthMode("register")}
            className={`${styles.menuButton} ${!isLoginMode ? styles.active : ""}`}>Sign up</button>

          <button type='button' aria-pressed={isLoginMode} onClick={() => changeAuthMode("login")}
            className={`${styles.menuButton} ${isLoginMode ? styles.active : ""}`}>Log in</button>

          <motion.div custom={isLoginMode} variants={menuActiveSliderVariants} initial="initial" animate="animate"
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
            className={styles.menuActiveBg} aria-hidden="true" />
        </motion.div>

        <motion.div variants={authItemVariants}>
          <AnimatePresence mode="wait" initial={false} custom={shouldReduceMotion}>
            <motion.div
              key={authMode}
              custom={shouldReduceMotion}
              variants={authPanelVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {isLoginMode ? <LoginForm /> : <RegisterForm />}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={authItemVariants} className={styles.additionalAction}>
          {isLoginMode ? <>
            Don't have an account? <Button type='link' onClick={() => changeAuthMode("register")}>Sign up</Button>
          </> : <>
            Already have an account? <Button type='link' onClick={() => changeAuthMode("login")}>Log in</Button>
          </>}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Auth
