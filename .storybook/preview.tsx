import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/App.css';

import { GlobalStyles } from '../src/global';
import { ThemeProvider } from 'styled-components';
import { colorThemes } from '../src/constants/tokens';

const preview: Preview = {
  decorators: [
    (Story) => (
      // FIXME: Some stories (e.g. `DarkModeToggle` and `FontPicker`) do not work because the theme state doesn't update.
      // Look for another solution to get the theming working with Storybook.
      // https://storybook.js.org/recipes/styled-components is one option but having trouble with types in particular.
      <ThemeProvider theme={{ colorMode: 'light', colors: colorThemes.light, fontFamily: 'Inter' }}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
