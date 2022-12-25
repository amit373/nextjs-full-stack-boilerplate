/* eslint-disable unused-imports/no-unused-vars */
import Eye from '@mui/icons-material/Visibility';
import EyeOff from '@mui/icons-material/VisibilityOff';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import type { InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import Link from './link';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label: string;
  name: string;
  forgotPageLink?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline';
  error: string | undefined;
  forgotPageRouteOnClick?: () => void;
}

const variantClasses = {
  normal:
    'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
  outline: 'border border-border-base focus:border-accent',
};

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      label,
      name,
      error,
      children,
      variant = 'normal',
      shadow = false,
      type = 'text',
      forgotPageLink = '',
      forgotPageRouteOnClick,
      ...rest
    },
    ref
  ) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    return (
      <div className={className}>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor={name}
            className={classNames('text-sm font-semibold text-body', {
              'text-red-500': error,
            })}
          >
            {label}
          </label>

          {forgotPageLink && (
            <Link
              href={forgotPageLink}
              className="text-xs text-accent transition-colors duration-200 hover:text-accent-hover focus:font-semibold focus:text-accent-700 focus:outline-none"
            >
              {t('common:text-forgot-password')}
            </Link>
          )}
          {forgotPageRouteOnClick && (
            <button
              onClick={forgotPageRouteOnClick}
              type="button"
              className="text-xs text-accent transition-colors duration-200 hover:text-accent-hover focus:font-semibold focus:text-accent-700 focus:outline-none"
            >
              {t('common:text-forgot-password')}
            </button>
          )}
        </div>
        <div className="relative">
          <input
            id={name}
            name={name}
            type={show ? 'text' : 'password'}
            ref={ref}
            className={classNames(
              'py-3 pl-4 pr-11 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
              shadow && 'focus:shadow',
              variantClasses[variant],
              error && 'border-1 border-red-500',
              inputClassName
            )}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            {...rest}
          />
          <label
            htmlFor={name}
            className="absolute top-5 right-4 -mt-3 cursor-pointer text-body"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <EyeOff className="h-6 w-6" />
            ) : (
              <Eye className="h-6 w-6" />
            )}
          </label>
        </div>
        {error && <p className="my-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
