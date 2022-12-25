import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import type {
  DeepPartial,
  FieldValues,
  Path,
  UnpackNestedValue,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { SchemaOf } from 'yup';

type ServerErrors<T> = {
  [Property in keyof T]: string;
};

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: (data: TFormValues, methods: UseFormReturn<TFormValues>) => void;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: SchemaOf<TFormValues>;
  serverError?: ServerErrors<Partial<TFormValues>> | null;
  resetValues?:
    | UnpackNestedValue<TFormValues>
    | UnpackNestedValue<DeepPartial<TFormValues>>
    | null;
  className?: string;
  [key: string]: unknown;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  useFormProps,
  validationSchema,
  serverError,
  resetValues,
  ...props
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...(!!validationSchema && { resolver: yupResolver(validationSchema) }),
    ...(!!useFormProps && useFormProps),
    mode: 'all',
  });
  useEffect(() => {
    if (serverError) {
      Object.entries(serverError).forEach(([key, value]) => {
        return methods.setError(key as Path<unknown | TFormValues>, {
          type: 'manual',
          message: value,
        });
      });
    }
  }, [serverError, methods]);

  useEffect(() => {
    if (resetValues) {
      methods.reset(resetValues as TFormValues);
    }
  }, [resetValues, methods]);

  return (
    <form
      onSubmit={methods.handleSubmit((data) => onSubmit(data, methods))}
      noValidate
      {...props}
    >
      {children(methods)}
    </form>
  );
};

export default Form;
