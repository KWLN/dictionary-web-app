import Select from 'react-select';
import { FontFamilyOption } from './types';
import { fontFamilyPickerStyles } from './FontPicker.styled';

const fontFamilyOptions: FontFamilyOption[] = [
  { value: 'Inter', label: 'Sans Serif' },
  { value: 'Lora', label: 'Serif' },
  { value: 'Inconsolata', label: 'Mono' },
];

export function FontPicker() {
  return (
    <Select<FontFamilyOption>
      aria-label="Font family"
      options={fontFamilyOptions}
      defaultValue={fontFamilyOptions[0]}
      isSearchable={false}
      unstyled
      styles={fontFamilyPickerStyles}
    />
  );
}
