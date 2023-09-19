import { ChangeEvent, useEffect, useState } from 'react';
import { FieldContainer, Icon, Input, InputWrapper } from './SearchBar.styled';
import SearchIcon from './assets/icon-search.svg';
import { InputError } from './types';
import { ErrorMessage } from './ErrorMessage';
import { useDebounce } from 'usehooks-ts';

type Props = {
  /** Callback that handles the fetching of data */
  onSearch: (inputValue: string) => void;
};

export function SearchBar(props: Props) {
  const { onSearch } = props;

  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<InputError | null>(null);

  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    onSearch(debouncedInputValue);
  }, [debouncedInputValue, onSearch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newValue = event.target.value;
    setInputValue(newValue);

    if (!newValue) {
      setInputError('empty');
    } else {
      setInputError(null);
    }
  };

  return (
    <FieldContainer>
      <InputWrapper>
        <Icon src={SearchIcon} alt="" />
        <Input
          placeholder="Search for any word..."
          value={inputValue}
          onChange={handleInputChange}
          isInvalid={!!inputError}
        />
      </InputWrapper>
      {inputError && <ErrorMessage error={inputError} />}
    </FieldContainer>
  );
}
