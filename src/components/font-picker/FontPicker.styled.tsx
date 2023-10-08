import { StylesConfig } from 'react-select';
import { FontFamilyOption } from './types';
import { typography } from '../../constants/tokens';

export const fontFamilyPickerStyles = ({
  isDarkModeEnabled,
}: {
  isDarkModeEnabled: boolean;
}): StylesConfig<FontFamilyOption> => ({
  control: (baseStyles) => ({
    ...baseStyles,
    cursor: 'pointer',
    width: 'fit-content',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    marginLeft: '16px',
    color: '#A445ED',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    minWidth: '184px',
    width: 'fit-content',
    // We can't use `theme.colors.background` here since the dark mode background color is different
    background: isDarkModeEnabled ? '#1F1F1F' : '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.10)',
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    paddingTop: '16px',
    paddingBottom: '16px',
  }),
  option: (baseStyles, props) => ({
    ...baseStyles,
    ...typography.bodyMedium,
    fontWeight: 700,
    cursor: 'pointer',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '24px',
    paddingRight: '24px',
    color: props.isSelected ? '#A445ED' : 'inherit',
    fontFamily: props.data.value,
  }),
  singleValue: (baseStyles, props) => ({
    ...baseStyles,
    ...typography.bodyMedium,
    fontWeight: 700,
    fontFamily: props.data.value,
  }),
});
