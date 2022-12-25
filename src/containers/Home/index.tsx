import { useTranslation } from 'next-i18next';
import type { UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

import { Button, Form, Input, PasswordInput } from '@/libs';
import type { LoginUserInput } from '@/types';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  password: yup.string().required('error-password-required'),
});

const Home = () => {
  const { t } = useTranslation('common');

  function onSubmit(
    { email, password }: LoginUserInput,
    methods: UseFormReturn<LoginUserInput>
  ): void {
    console.log(
      '🚀 ~ file: index.tsx:23 ~ Home ~ email, password',
      email,
      password
    );
    methods.reset();
  }

  return (
    <div>
      <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
        <div className="flex justify-center">Logo</div>
        <p className="mt-4 mb-8 text-center text-sm text-body sm:mt-5 sm:mb-10 md:text-base">
          {t('login-helper')}
        </p>{' '}
        <Form<LoginUserInput>
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ register, formState: { errors, isSubmitting } }) => (
            <>
              <Input
                label={t('text-email')!}
                {...register('email')}
                type="email"
                variant="outline"
                className="mb-5"
                error={t(errors.email?.message!)!}
              />
              <PasswordInput
                label={t('text-password')}
                {...register('password')}
                error={t(errors.password?.message!)!}
                variant="outline"
                className="mb-5"
              />
              <div className="mt-8">
                <Button
                  className="h-11 w-full sm:h-12"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {t('text-login')}
                </Button>
              </div>
            </>
          )}
        </Form>{' '}
      </div>
    </div>
  );
};

export default Home;
