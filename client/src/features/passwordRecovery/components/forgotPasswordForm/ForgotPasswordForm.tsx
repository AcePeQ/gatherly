import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ForgotPasswordFormValues } from '../../schemas/forgotPasswordSchema';
import styles from './ForgotPasswordForm.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import InputRow from '../../../../components/inputRow/InputRow';
import Button from '../../../../components/button/Button';

function ForgotPasswordForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = (data) => {
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

      <Button clickType='submit' type='primary'>Send reset instructions</Button>
    </form>
  )
}

export default ForgotPasswordForm
