import Select from 'react-select';
import { FontFamilyOption } from './types';
import { fontFamilyPickerStyles } from './FontPicker.styled';
import { FontFamily } from '../../global';

const fontFamilyOptions: FontFamilyOption[] = [
  { value: 'Inter', label: 'Sans Serif' },
  { value: 'Lora', label: 'Serif' },
  { value: 'Inconsolata', label: 'Mono' },
];

type Props = {
  setFontFamily: (fontFamily: FontFamily) => void;
};

export function FontPicker(props: Props) {
  const { setFontFamily } = props;

  const handleOptionChange = (newOption: FontFamilyOption | null) => {
    if (newOption) {
      setFontFamily(newOption.value);
    } else {
      // `newOption` should never be null as the select is not clearable but we handle it anyway due to types
      setFontFamily('Inter');
    }
  };

  return (
    <Select<FontFamilyOption>
      aria-label="Font family"
      options={fontFamilyOptions}
      defaultValue={fontFamilyOptions[0]}
      isClearable={false}
      isSearchable={false}
      onChange={handleOptionChange}
      unstyled
      styles={fontFamilyPickerStyles}
    />
  );
}
