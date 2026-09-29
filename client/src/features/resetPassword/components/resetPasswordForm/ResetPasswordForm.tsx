import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, type ResetPasswordFormValues } from '../../schemas/resetPasswordSchema';
import styles from './ResetPasswordForm.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import InputRow from '../../../../components/inputRow/InputRow';
import Button from '../../../../components/button/Button';

function ResetPasswordForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (data) => {
    console.log(data)
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputRow id='email' label="Email" error={errors.email?.message}>
        <input id='email' type='email' autoComplete='email'
          {...register("email")}
          placeholder='Enter your email'
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </InputRow>

      <Button clickType='submit' type='primary'>Reset Password</Button>
    </form>
  )
}

export default ResetPasswordForm