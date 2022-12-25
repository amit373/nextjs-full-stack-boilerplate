interface Props {
  message: string | undefined;
}

export const ValidationError = ({ message }: Props) => {
  return <p className="my-2 text-left text-sm text-red-500">{message}</p>;
};
