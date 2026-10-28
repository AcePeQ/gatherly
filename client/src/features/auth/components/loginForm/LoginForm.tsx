import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

import Button from "../../../../components/button/Button";
import InputField from "../../../../components/inputField/InputField";
import InputRow from "../../../../components/inputRow/InputRow";
import AppLink from "../../../../components/link/AppLink";
import type { AuthRedirectState } from "../../../../types/auth";
import { useLogin } from "../../api/useLogin";
import { loginSchema, type LoginFormValues } from "../../schemas/loginSchema";

import styles from "./LoginForm.module.css";

function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  const [showPassword, setShowPassword] = useState(false);

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
        toast.error(error.message);
        resetField("password");
        setFocus("password");
      },
    });
  };

  function handleTogglePassword() {
    setShowPassword((previousValue) => !previousValue);
  }

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <InputField
        label="Email"
        error={errors.email?.message}
        id="email"
        type="email"
        autoComplete="email"
        placeholder="Enter your email"
        disabled={isPending}
        {...register("email")}
      />

      <InputRow
        id="password"
        label="Password"
        error={errors.password?.message}
        isPassword
        showPassword={showPassword}
        onTogglePassword={handleTogglePassword}
      >
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          {...register("password")}
          placeholder="Enter your password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          disabled={isPending}
        />
      </InputRow>

      <div className={styles.additionalActions}>
        <label className={styles.checkboxLabel} htmlFor="remember">
          <input
            id="remember"
            className={styles.checkbox}
            type="checkbox"
            disabled={isPending}
            {...register("remember")}
          />
          Remember for 30 days
        </label>

        <AppLink to="/forgot-password">Forgot password?</AppLink>
      </div>

      <Button isLoading={isPending} type="submit" variant="primary">
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
