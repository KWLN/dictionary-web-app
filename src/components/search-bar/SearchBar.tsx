import { ChangeEvent, useEffect, useState } from 'react';
import { FieldContainer, Icon, Input, InputWrapper } from './SearchBar.styled';
import SearchIcon from './assets/icon-search.svg';
import { ErrorMessage, type InputError } from './error-message';
import { useDebounce } from 'usehooks-ts';
import { useWordContext } from '../../context/word-context';

export function SearchBar() {
  const { currentWord, setCurrentWord } = useWordContext();
  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<InputError | null>(null);

  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    // There's a `useEffect` at the page level that listens for changes
    // to the current word and triggers a definition search.
    setCurrentWord(debouncedInputValue);
  }, [debouncedInputValue, setCurrentWord]);

  useEffect(() => {
    // If the current word changes outside of the search bar (e.g. user clicks on a related word),
    // the search input value should be updated to match the new current word.
    setInputValue(currentWord);
  }, [currentWord]);

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
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          $isInvalid={!!inputError}
        />
      </InputWrapper>
      {inputError && <ErrorMessage error={inputError} />}
    </FieldContainer>
  );
}
