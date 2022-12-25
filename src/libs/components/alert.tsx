/* eslint-disable tailwindcss/no-custom-classname */
import CloseIcon from '@mui/icons-material/Close';
import cn from 'classnames';
import React from 'react';

type AlertProps = {
  message: string | null;
  variant?:
    | 'info'
    | 'warning'
    | 'error'
    | 'success'
    | 'infoOutline'
    | 'warningOutline'
    | 'errorOutline'
    | 'successOutline';
  closeable?: boolean;
  onClose?: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
};

const variantClasses = {
  info: 'bg-blue-100 text-blue-600',
  warning: 'bg-yellow-100 text-yellow-600',
  error: 'bg-red-100 text-red-500',
  success: 'bg-green-100 text-accent',
  infoOutline: 'border border-blue-200 text-blue-600',
  warningOutline: 'border border-yellow-200 text-yellow-600',
  errorOutline: 'border border-red-200 text-red-600',
  successOutline: 'border border-green-200 text-green-600',
};

const Alert: React.FC<AlertProps> = ({
  message,
  closeable = false,
  variant = 'info',
  className,
  onClose,
}) => {
  if (!message) return null;
  return (
    <div
      className={cn(
        'relative flex items-center justify-between rounded py-4 px-5 shadow-sm',
        variantClasses[variant],
        className
      )}
      role="alert"
    >
      <p className="text-sm">{message}</p>
      {closeable && (
        <button
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
          title="Close alert"
          className="hover:bg-opacity/25 focus:bg-opacity/25 absolute top-1/2 right-2 -mt-3 -mr-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-red-500 transition-colors duration-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        >
          <span aria-hidden="true">
            <CloseIcon className="h-3 w-3" />
          </span>
        </button>
      )}
    </div>
  );
};

export default Alert;