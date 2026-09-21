export const menuActiveSliderVariants = {
  initial: (isLoginMode: boolean) => ({
    x: isLoginMode ? "100%" : "0%"
  }),
  animate: (isLoginMode: boolean) => ({
    x: isLoginMode ? "100%" : "0%"
  })
}