import { Message } from './ErrorMessage.styled';
import { InputError } from './types';

const getErrorMessage = (error: InputError) => {
  switch (error) {
    case 'empty':
      return "Whoops, can't be empty...";
    default:
      return null;
  }
};

type Props = {
  error: InputError;
};

export function ErrorMessage(props: Props) {
  const { error } = props;

  return <Message>{getErrorMessage(error)}</Message>;
}
