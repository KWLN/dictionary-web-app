import { ChangeEvent, useState } from 'react';
import { Icon, Input, InputWrapper } from './Search.styled';
import SearchIcon from './assets/icon-search.svg';

export function Search() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  return (
    <InputWrapper>
      <Input placeholder="Search for any word..." value={inputValue} onChange={handleInputChange} />
      <Icon src={SearchIcon} alt="" />
    </InputWrapper>
  );
}
