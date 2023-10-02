import Select from 'react-select';
import { FontFamilyOption } from './types';

const fontFamilyOptions: FontFamilyOption[] = [
  { value: 'sans-serif', label: 'Sans Serif' },
  { value: 'serif', label: 'Serif' },
  { value: 'mono', label: 'Mono' },
];

export function FontPicker() {
  return (
    <Select<FontFamilyOption> options={fontFamilyOptions} defaultValue={fontFamilyOptions[0]} />
  );
}
