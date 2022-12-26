import ArrowNarrowLeft from '@mui/icons-material/ArrowBack';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

const BackButton = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <button
      className="inline-flex items-center justify-center font-semibold text-accent transition-colors hover:text-accent-hover focus:text-accent-hover focus:outline-none"
      onClick={router.back}
    >
      <ArrowNarrowLeft
        className={cn('w-5 h-5 mr-2', {
          'transform rotate-180':
            router.locale === 'ar' || router.locale === 'he',
        })}
        strokeWidth={1.7}
      />
      {t('BACK')}
    </button>
  );
};

export default BackButton;
