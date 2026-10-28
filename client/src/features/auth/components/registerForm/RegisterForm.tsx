import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "../../../../components/button/Button";
import InputField from "../../../../components/inputField/InputField";
import PasswordField from "../../../../components/passwordField/PasswordField";
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

  const meetsMinimumLength = password.length >= PASSWORD_MIN_LENGTH;
  const containsSpecialCharacter =
    PASSWORD_SPECIAL_CHARACTER_PATTERN.test(password);

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(handleRegistrationSubmit)}
    >
      <InputField
        id="name"
        label="Name"
        error={errors.name?.message}
        type="text"
        autoComplete="name"
        placeholder="Enter your name"
        disabled={isPending}
        {...register("name")}
      />

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
        autoComplete="new-password"
        placeholder="Enter your password"
        aria-describedby="password-requirements"
        disabled={isPending}
        {...register("password")}
      />

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
