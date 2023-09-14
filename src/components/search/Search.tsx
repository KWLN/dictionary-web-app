import { Icon, Input, InputWrapper } from './Search.styled';
import SearchIcon from './assets/icon-search.svg';

export function Search() {
  return (
    <InputWrapper>
      <Input placeholder="Search for any word..." />
      <Icon src={SearchIcon} alt="" />
    </InputWrapper>
  );
}
