import styles from './RegisterForm.module.css';

import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputRow from '../../../../components/inputRow/InputRow';
import { useState } from 'react';
import Button from '../../../../components/button/Button';
import { registerSchema, type RegisterFormValues } from '../../schemas/registerSchema';

function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, control, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  })

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
  }


  function handleTogglePassword() {
    setShowPassword(prev => !prev);
  }

  const hasMinimumLength = password.length >= 8;

  const hasSpecialCharacter =
    /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/.test(password);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputRow id='name' label="Name" error={errors.name?.message}>
        <input id='name' type='text' autoComplete='name'
          {...register("name")}
          placeholder='Enter your name'
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </InputRow>

      <InputRow id='email' label="Email" error={errors.email?.message}>
        <input id='email' type='email' autoComplete='email'
          {...register("email")}
          placeholder='Enter your email'
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </InputRow>

      <InputRow id='password' label='Password' error={errors.password?.message} isPassword showPassword={showPassword} onTogglePassword={handleTogglePassword}>
        <input id='password' type={showPassword ? "text" : "password"} autoComplete='new-password'
          {...register("password")}
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
      </InputRow>

      <ul aria-hidden="true" className={styles.passwordTestList}>
        <li className={styles.passwordTestItem}>
          <div className={`${styles.passwordTestDot} ${hasMinimumLength ? styles.pass : ""}`} />
          Must be at least 8 characters
        </li>

        <li className={styles.passwordTestItem}>
          <div className={`${styles.passwordTestDot} ${hasSpecialCharacter ? styles.pass : ""}`} />
          Must contain one special character
        </li>
      </ul>


      <Button clickType='submit' type='primary'>Get started</Button>
    </form>
  )
}

export default RegisterForm