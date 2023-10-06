import { ReactSVG } from 'react-svg';
import { Container, Icon, ToggleButton, ToggleDisplay } from './DarkModeToggle.styled';
import MoonSvg from './assets/icon-moon.svg';
import { useTheme } from 'styled-components';

type Props = {
  toggleColorMode: () => void;
};

export function DarkModeToggle(props: Props) {
  const { toggleColorMode } = props;

  const { colorMode } = useTheme();

  const isDarkModeEnabled = colorMode === 'dark';

  return (
    <Container>
      <ToggleButton
        aria-label="Enable dark mode"
        aria-pressed={isDarkModeEnabled}
        onClick={toggleColorMode}
      >
        <ToggleDisplay isDarkModeEnabled={isDarkModeEnabled} />
      </ToggleButton>
      <Icon isDarkModeEnabled={isDarkModeEnabled}>
        <ReactSVG src={MoonSvg} />
      </Icon>
    </Container>
  );
}
