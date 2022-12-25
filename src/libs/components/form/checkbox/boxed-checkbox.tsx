import cn from 'classnames';
import type { InputHTMLAttributes } from 'react';
import React from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  error?: string;
}

const BoxedCheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, name, error, ...rest }, ref) => {
    return (
      <div className={cn('flex items-center', className)}>
        <input
          id={name}
          name={name}
          type="checkbox"
          ref={ref}
          className="boxed-checkbox"
          {...rest}
        />

        <label htmlFor={name} className="text-sm text-body">
          {label}
        </label>
        {error && (
          <p className="my-2 text-right text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

BoxedCheckbox.displayName = 'Boxed Checkbox';
export default BoxedCheckbox;