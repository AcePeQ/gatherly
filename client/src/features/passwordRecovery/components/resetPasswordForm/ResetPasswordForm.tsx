import { zodResolver } from '@hookform/resolvers/zod';
import styles from './ResetPasswordForm.module.css';
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import InputRow from '../../../../components/inputRow/InputRow';
import Button from '../../../../components/button/Button';
import { resetPasswordSchema, type ResetPasswordFormValues } from '../../schemas/resetPasswordSchema';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

function ResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmPassword] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors }, control } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    }
  });

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  })

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (data) => {
    console.log(data)
  }

  function handleTogglePassword() {
    setShowPassword(prev => !prev);
  }

  function handleToggleConfirmPassword() {
    setConfirmPassword(prev => !prev);
  }

  const hasMinimumLength = password.length >= 8;

  const hasSpecialCharacter =
    /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/.test(password);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputRow id='password' label='Password' error={errors.password?.message} isPassword showPassword={showPassword} onTogglePassword={handleTogglePassword}>
        <input id='password' type={showPassword ? "text" : "password"} autoComplete='new-password'
          {...register("password")}
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          aria-invalid={Boolean(errors.password)}
          aria-describedby={
            errors.password
              ? "password-requirements password-error"
              : "password-requirements"
          }
        />
      </InputRow>

      <InputRow id='confirmPasssword' label='Confirm Password' error={errors.confirmPassword?.message} isPassword showPassword={showConfirmPassword} onTogglePassword={handleToggleConfirmPassword}>
        <input id='confirmPassword' type={showConfirmPassword ? "text" : "password"} autoComplete='new-password'
          {...register("confirmPassword")}
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          aria-invalid={Boolean(errors.password)}
        />
      </InputRow>

      <ul id="password-requirements" className={styles.passwordTestList}>
        <li className={styles.passwordTestItem}>
          <div className={`${styles.passwordTestDot} ${hasMinimumLength ? styles.pass : ""}`} />
          Must be at least 8 characters
        </li>

        <li className={styles.passwordTestItem}>
          <div className={`${styles.passwordTestDot} ${hasSpecialCharacter ? styles.pass : ""}`} />
          Must contain one special character
        </li>
      </ul>

      <Button clickType='submit' type='primary'>Reset Password</Button>
    </form>
  )
}

export default ResetPasswordForm