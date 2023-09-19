import { ChangeEvent, useState } from 'react';
import { FieldContainer, Icon, Input, InputWrapper } from './Search.styled';
import SearchIcon from './assets/icon-search.svg';
import { InputError } from './types';
import { ErrorMessage } from './ErrorMessage';
import { useSearchDictionaryApi } from '../../services/dictionary-api';
import { useDebounce } from 'usehooks-ts';

export function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<InputError | null>(null);

  const debouncedInputValue = useDebounce(inputValue, 500);
  const { data, loading, error } = useSearchDictionaryApi(debouncedInputValue);

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
