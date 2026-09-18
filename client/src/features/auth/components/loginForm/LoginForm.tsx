import styles from './LoginForm.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormValues } from '../../schemas/loginSchema';
import InputRow from '../../../../components/inputRow/InputRow';
import { useState } from 'react';
import Button from '../../../../components/button/Button';

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  }

  function handleTogglePassword() {
    setShowPassword(prev => !prev);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputRow id='email' label="Email" error={errors.email?.message}>
        <input id='email' type='email' autoComplete='email'
          {...register("email")}
          placeholder='Enter your email'
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </InputRow>

      <InputRow id='password' label='Password' error={errors.password?.message} isPassword showPassword={showPassword} onTogglePassword={handleTogglePassword}>
        <input id='password' type={showPassword ? "text" : "password"} autoComplete='current-password'
          {...register("password")}
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
      </InputRow>


      <Button clickType='submit' type='primary'>Sign in</Button>
    </form>
  )
}

export default LoginForm