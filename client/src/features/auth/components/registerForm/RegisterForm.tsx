import styles from './RegisterForm.module.css';

import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputRow from '../../../../components/inputRow/InputRow';
import { useState } from 'react';
import Button from '../../../../components/button/Button';
import { registerSchema, type RegisterFormValues } from '../../schemas/registerSchema';
import { useCreateUser } from '../../api/useCreateUser';
import { toast } from 'react-toastify';

type RegisterFormProps = {
  onRegisterSuccess: () => void
}

function RegisterForm({ onRegisterSuccess }: RegisterFormProps) {
  const { isPending, createUser } = useCreateUser()
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<RegisterFormValues>({
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
    createUser(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        onRegisterSuccess();
      },
      onError: (error) => {
        toast.error(error.message)
        reset();
      },
    });
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
          disabled={isPending}
        />
      </InputRow>

      <InputRow id='email' label="Email" error={errors.email?.message}>
        <input id='email' type='email' autoComplete='email'
          {...register("email")}
          placeholder='Enter your email'
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={isPending}
        />
      </InputRow>

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
          disabled={isPending}
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


      <Button isDisabled={isPending} clickType='submit' type='primary'>{isPending ? "Creating account..." : "Get started"}</Button>
    </form>
  )
}

export default RegisterForm