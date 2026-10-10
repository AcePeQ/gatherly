import styles from './LoginForm.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormValues } from '../../schemas/loginSchema';
import InputRow from '../../../../components/inputRow/InputRow';
import { useState } from 'react';
import Button from '../../../../components/button/Button';
import Link from '../../../../components/link/Link';
import { useLogin } from '../../api/useLogin';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { AUTH_SESSION_QUERY_KEY } from '../../constants/authQueryKeys';
import type { AuthRedirectState, AuthSessionResponse } from '../../../../types/auth';

function LoginForm() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate()
  const { loginFn, isPending } = useLogin()

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    }
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    loginFn(data, {
      onSuccess: (data) => {
        toast.success(data.message);

        queryClient.setQueryData<AuthSessionResponse>(AUTH_SESSION_QUERY_KEY, {
          user: data.user,
          isAuthorized: true,
        });

        const redirectState = location.state as AuthRedirectState | null;
        const previousLocation = redirectState?.from;
        const redirectTo = previousLocation
          ? `${previousLocation.pathname}${previousLocation.search ?? ''}${previousLocation.hash ?? ''}`
          : "/dashboard";

        navigate(redirectTo, { replace: true });
      },
      onError: (error) => {
        toast.error(error.message)
        reset();
      }
    })
  }

  function handleTogglePassword() {
    setShowPassword(prev => !prev);
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

      <InputRow id='password' label='Password' error={errors.password?.message} isPassword showPassword={showPassword} onTogglePassword={handleTogglePassword}>
        <input id='password' type={showPassword ? "text" : "password"} autoComplete='current-password'
          {...register("password")}
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          disabled={isPending}
        />
      </InputRow>

      <div className={styles.additionalActions}>
        <label className={styles.checkboxLabel} htmlFor='remember'>
          <input disabled={isPending} className={styles.checkbox} id='remember' type='checkbox' {...register("remember")} />
          Remember for 30 days
        </label>

        <Link path='/forgot-password'>Forgot password</Link>
      </div>

      <Button isLoading={isPending} clickType='submit' type='primary'>Sign in</Button>
    </form>
  )
}

export default LoginForm
