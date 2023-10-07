import { DictionaryPage } from './pages/dictionary';
import './App.css';
import { FontFamily, GlobalStyles, Theme } from './global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { colorThemes } from './constants/tokens';
import { useDarkMode } from 'usehooks-ts';

function App() {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();
  const [theme, setTheme] = useState<Theme>({
    colorMode: isDarkMode ? 'dark' : 'light',
    colors: isDarkMode ? colorThemes.dark : colorThemes.light,
    fontFamily: 'Inter',
  });

  const setFontFamily = (fontFamily: FontFamily) => {
    setTheme((prev) => ({ ...prev, fontFamily }));
  };

  const toggleColorMode = () => {
    if (isDarkMode) {
      setTheme((prev) => ({ ...prev, colorMode: 'light', colors: colorThemes.light }));
    } else {
      setTheme((prev) => ({ ...prev, colorMode: 'dark', colors: colorThemes.dark }));
    }

    toggleDarkMode();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DictionaryPage setFontFamily={setFontFamily} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
}

export default App;
