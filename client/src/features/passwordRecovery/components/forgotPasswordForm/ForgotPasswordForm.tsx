import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import Button from "../../../../components/button/Button";
import InputField from "../../../../components/inputField/InputField";
import { useForgotPassword } from "../../api/useForgotPassword";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "../../schemas/forgotPasswordSchema";

import styles from "./ForgotPasswordForm.module.css";

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const { isPending, forgotPassword } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSendResetLink: SubmitHandler<ForgotPasswordFormValues> = (data) => {
    forgotPassword(data, {
      onSettled: (response, error) => {
        toast.info(
          error?.message ?? response?.message ?? "Request completed",
        );
        navigate(
          `/forgot-password/check-email?email=${encodeURIComponent(data.email)}`,
        );
      },
    });
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit(handleSendResetLink)}>
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

      <Button isLoading={isPending} type="submit" variant="primary">
        Send reset link
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
