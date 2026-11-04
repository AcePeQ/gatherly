import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

import Button from "../../../../components/button/Button";
import InputField from "../../../../components/inputField/InputField";
import AppLink from "../../../../components/link/AppLink";
import PasswordField from "../../../../components/passwordField/PasswordField";
import type { AuthRedirectState } from "../../../../types/auth";
import { useLogin } from "../../api/useLogin";
import { loginSchema, type LoginFormValues } from "../../schemas/loginSchema";

import styles from "./LoginForm.module.css";
import { ApiError } from "../../../../lib/errors/ApiError";
import Checkbox from "../../../../components/checkbox/Checkbox";

function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    resetField,
    setFocus,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const handleLoginSubmit: SubmitHandler<LoginFormValues> = (credentials) => {
    login(credentials, {
      onSuccess: (response) => {
        toast.success(response.message);

        const redirectState = location.state as AuthRedirectState | null;
        const previousLocation = redirectState?.from;
        const redirectTo = previousLocation
          ? `${previousLocation.pathname}${previousLocation.search ?? ""}${previousLocation.hash ?? ""}`
          : "/dashboard";

        navigate(redirectTo, { replace: true });
      },
      onError: (error) => {
        if (error instanceof ApiError && error.errorCode === "INVALID_CREDENTIALS") {
          toast.error("Invalid email or password.")
        } else {
          toast.error("Something went wrong. Please try again")
        }
        resetField("password");
        setFocus("password");
      },
    });
  };

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <InputField
        id="email"
        label="Email"
        error={errors.email?.message}
        type="email"
        autoComplete="email"
        placeholder="Enter your email"
        disabled={isPending}
        {...register("email")}
      />

      <PasswordField
        id="password"
        label="Password"
        error={errors.password?.message}
        autoComplete="current-password"
        placeholder="Enter your password"
        disabled={isPending}
        {...register("password")}
      />

      <div className={styles.additionalActions}>
        <Checkbox
          label="Remember for 30 days"
          id="remember"
          className={styles.checkboxContainer}
          inputClassName={styles.checkbox}
          disabled={isPending}
          {...register("remember")}
        />

        <AppLink to="/forgot-password">Forgot password?</AppLink>
      </div>


      <Button isLoading={isPending} type="submit" variant="primary">
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
