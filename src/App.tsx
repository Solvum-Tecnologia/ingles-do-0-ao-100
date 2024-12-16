import React, { useEffect } from 'react';
import Aos from 'aos';

import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

import GlobalStyles from './styles/global';
import 'aos/dist/aos.css';
import { Hooks } from './hooks';
import { theme } from './styles/theme';
import { envs } from './constants/envs';

const App: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  const selectTheme =
    envs.IS_BLACK === 'true' ? theme.nightColors : theme.defaultColors;

  return (
    <ThemeProvider theme={selectTheme}>
      <Hooks>
        <Home />
      </Hooks>
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
