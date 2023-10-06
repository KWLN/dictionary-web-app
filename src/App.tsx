import { DictionaryPage } from './pages/dictionary';
import './App.css';
import { FontFamily, GlobalStyles, Theme } from './global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<Theme>({ colorMode: 'light', fontFamily: 'Inter' });

  const setFontFamily = (fontFamily: FontFamily) => {
    setTheme((prev) => ({ ...prev, fontFamily }));
  };

  const toggleColorMode = () => {
    if (theme.colorMode === 'light') {
      setTheme((prev) => ({ ...prev, colorMode: 'dark' }));
    } else {
      setTheme((prev) => ({ ...prev, colorMode: 'light' }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DictionaryPage setFontFamily={setFontFamily} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
}

export default App;
