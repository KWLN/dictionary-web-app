type Colors = {
  accent: string;
  background: string;
  divider: string;
  error: string;
  input: string;
  textPrimary: string;
  textSecondary: string;
};

type ColorTokens = {
  light: Colors;
  dark: Colors;
};

export const colors: ColorTokens = {
  light: {
    accent: '#A445ED',
    background: '#FFFFFF',
    divider: '#E9E9E9',
    error: '#FF5252',
    input: '#F4F4F4',
    textPrimary: '#2D2D2D',
    textSecondary: '#757575',
  },
  dark: {
    accent: '#A445ED',
    background: '#050505',
    divider: '#3A3A3A',
    error: '#FF5252',
    input: '#1F1F1F',
    textPrimary: '#FFFFFF',
    textSecondary: '#757575',
  },
};

type TypographyStyles = {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
};

type TypographyTokens = {
  headingLarge: TypographyStyles;
  headingMedium: TypographyStyles;
  headingSmall: TypographyStyles;
  bodyMedium: TypographyStyles;
  bodySmall: TypographyStyles;
};

export const typography: TypographyTokens = {
  headingLarge: {
    fontSize: '64px',
    fontWeight: 700,
    lineHeight: '77px',
  },
  headingMedium: {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '29px',
  },
  headingSmall: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  bodyMedium: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  bodySmall: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
  },
};
