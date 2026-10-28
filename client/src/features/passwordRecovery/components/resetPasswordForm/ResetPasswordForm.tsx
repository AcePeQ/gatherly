import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";

import Button from "../../../../components/button/Button";
import PasswordField from "../../../../components/passwordField/PasswordField";
import { useResetPassword } from "../../api/useResetPassword";
import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from "../../schemas/resetPasswordSchema";

import styles from "./ResetPasswordForm.module.css";

function ResetPasswordForm() {
  const { resetPassword, isPending } = useResetPassword();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token") ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      token,
    },
  });

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (data) => {
    resetPassword(data, {
      onSuccess: (response) => {
        toast.success(response.message);
        navigate("/reset-password/success", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
        reset();
      },
    });
  };

  const hasMinimumLength = password.length >= 8;

  const hasSpecialCharacter =
    /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/.test(password);

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <PasswordField
        id="password"
        label="Password"
        error={errors.password?.message}
        autoComplete="new-password"
        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        aria-describedby="password-requirements"
        disabled={isPending}
        {...register("password")}
      />

      <PasswordField
        id="confirmPassword"
        label="Confirm Password"
        error={errors.confirmPassword?.message}
        autoComplete="new-password"
        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        disabled={isPending}
        {...register("confirmPassword")}
      />

      <ul id="password-requirements" className={styles.passwordTestList}>
        <li className={styles.passwordTestItem}>
          <div
            className={`${styles.passwordTestDot} ${
              hasMinimumLength ? styles.pass : ""
            }`}
          />
          Must be at least 8 characters
        </li>

        <li className={styles.passwordTestItem}>
          <div
            className={`${styles.passwordTestDot} ${
              hasSpecialCharacter ? styles.pass : ""
            }`}
          />
          Must contain one special character
        </li>
      </ul>

      <Button isLoading={isPending} type="submit" variant="primary">
        Reset Password
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
