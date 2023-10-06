import { useState } from 'react';
import { Container, ToggleButton, ToggleDisplay } from './DarkModeToggle.styled';

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
    </Container>
  );
}
