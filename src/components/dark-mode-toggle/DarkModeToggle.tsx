import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Container, Icon, ToggleButton, ToggleDisplay } from './DarkModeToggle.styled';
import MoonSvg from './assets/icon-moon.svg';

export function DarkModeToggle() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled((prev) => !prev);
  };

  return (
    <Container>
      <ToggleButton
        aria-label="Enable dark mode"
        aria-pressed={isDarkModeEnabled}
        onClick={toggleDarkMode}
      >
        <ToggleDisplay isDarkModeEnabled={isDarkModeEnabled} />
      </ToggleButton>
      <Icon isDarkModeEnabled={isDarkModeEnabled}>
        <ReactSVG src={MoonSvg} />
      </Icon>
    </Container>
  );
}
