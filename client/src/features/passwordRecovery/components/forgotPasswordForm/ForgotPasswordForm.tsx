import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ForgotPasswordFormValues } from '../../schemas/forgotPasswordSchema';
import styles from './ForgotPasswordForm.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import InputRow from '../../../../components/inputRow/InputRow';
import Button from '../../../../components/button/Button';
import { useForgotPassword } from '../../api/useForgotPassword';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const { isPending, forgotPassword } = useForgotPassword()
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = (data) => {
    forgotPassword(data,
      {
        onSettled: (res, error) => {
          toast.info(error?.message ?? res?.message ?? "Request completed");
          navigate(`/forgot-password/check-email?email=${encodeURIComponent(data.email)}`);
        }
      }
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputRow id='email' label="Email" error={errors.email?.message}>
        <input id='email' type='email' autoComplete='email'
          {...register("email")}
          placeholder='Enter your email'
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={isPending}
        />
      </InputRow>

      <Button isLoading={isPending} clickType='submit' type='primary'>Send reset instructions</Button>
    </form>
  )
}

export default ForgotPasswordForm
