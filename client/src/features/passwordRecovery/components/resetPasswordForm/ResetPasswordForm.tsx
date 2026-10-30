import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import Button from "../../../../components/button/Button";
import PasswordField from "../../../../components/passwordField/PasswordField";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_SPECIAL_CHARACTER_PATTERN,
} from "../../../../utils/constants";
import { useResetPassword } from "../../api/useResetPassword";
import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from "../../schemas/resetPasswordSchema";

import styles from "./ResetPasswordForm.module.css";

function ResetPasswordForm({ token }: { token: string }) {
  const { resetPassword, isPending } = useResetPassword();
  const navigate = useNavigate();

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
    },
  });

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  const handlePasswordReset: SubmitHandler<ResetPasswordFormValues> = (
    formValues,
  ) => {
    resetPassword(
      { ...formValues, token },
      {
        onSuccess: (response) => {
          toast.success(response.message);
          navigate("/reset-password/success", { replace: true });
        },
        onError: (error) => {
          toast.error(error.message);
          reset();
        },
      },
    );
  };

  const hasMinimumLength = password.length >= PASSWORD_MIN_LENGTH;

  const hasSpecialCharacter =
    PASSWORD_SPECIAL_CHARACTER_PATTERN.test(password);

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(handlePasswordReset)}
    >
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
          <span
            className={`${styles.passwordTestDot} ${
              hasMinimumLength ? styles.pass : ""
            }`}
            aria-hidden="true"
          />
          <span className="sr-only">
            {hasMinimumLength
              ? "Requirement met: "
              : "Requirement not met: "}
          </span>
          Must be at least 8 characters
        </li>

        <li className={styles.passwordTestItem}>
          <span
            className={`${styles.passwordTestDot} ${
              hasSpecialCharacter ? styles.pass : ""
            }`}
            aria-hidden="true"
          />
          <span className="sr-only">
            {hasSpecialCharacter
              ? "Requirement met: "
              : "Requirement not met: "}
          </span>
          Must contain one special character
        </li>
      </ul>

      <Button
        className={styles.submitButton}
        isLoading={isPending}
        type="submit"
        variant="primary"
      >
        Update password
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
