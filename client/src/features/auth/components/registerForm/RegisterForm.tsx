import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "../../../../components/button/Button";
import InputRow from "../../../../components/inputRow/InputRow";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_SPECIAL_CHARACTER_PATTERN,
} from "../../../../utils/constants";
import { useRegister } from "../../api/useRegister";
import {
  registerSchema,
  type RegisterFormValues,
} from "../../schemas/registerSchema";

import styles from "./RegisterForm.module.css";

type RegisterFormProps = {
  onRegistrationSuccess: () => void;
};

function RegisterForm({ onRegistrationSuccess }: RegisterFormProps) {
  const { isPending, registerUser } = useRegister();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  const handleRegistrationSubmit: SubmitHandler<RegisterFormValues> = (
    formValues,
  ) => {
    registerUser(formValues, {
      onSuccess: (response) => {
        toast.success(response.message);
        onRegistrationSuccess();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  function handleTogglePassword() {
    setShowPassword((previousValue) => !previousValue);
  }

  const meetsMinimumLength = password.length >= PASSWORD_MIN_LENGTH;
  const containsSpecialCharacter =
    PASSWORD_SPECIAL_CHARACTER_PATTERN.test(password);

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(handleRegistrationSubmit)}
    >
      <InputRow id="name" label="Name" error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          placeholder="Enter your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={isPending}
        />
      </InputRow>

      <InputRow id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          placeholder="Enter your email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={isPending}
        />
      </InputRow>

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
          autoComplete="new-password"
          {...register("password")}
          placeholder="Enter your password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={
            errors.password
              ? "password-requirements password-error"
              : "password-requirements"
          }
          disabled={isPending}
        />
      </InputRow>

      <ul id="password-requirements" className={styles.passwordRequirements}>
        <li className={styles.passwordRequirement}>
          <span
            className={`${styles.requirementIndicator} ${
              meetsMinimumLength ? styles.requirementIndicatorPass : ""
            }`}
          />
          <span className="sr-only">
            {meetsMinimumLength ? "Requirement met: " : "Requirement not met: "}
          </span>
          Must be at least 8 characters
        </li>

        <li className={styles.passwordRequirement}>
          <span
            className={`${styles.requirementIndicator} ${
              containsSpecialCharacter
                ? styles.requirementIndicatorPass
                : ""
            }`}
          />
          <span className="sr-only">
            {containsSpecialCharacter
              ? "Requirement met: "
              : "Requirement not met: "}
          </span>
          Must contain one special character
        </li>
      </ul>

      <Button isLoading={isPending} type="submit" variant="primary">
        Get started
      </Button>
    </form>
  );
}

export default RegisterForm;
