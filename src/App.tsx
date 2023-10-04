import { DictionaryPage } from './pages/dictionary';
import './App.css';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { FontFamily, Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>({ colorMode: 'light', fontFamily: 'Inter' });

  const setFontFamily = (fontFamily: FontFamily) => {
    setTheme((prev) => ({ ...prev, fontFamily }));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DictionaryPage setFontFamily={setFontFamily} />
    </ThemeProvider>
  );
}

export default App;
