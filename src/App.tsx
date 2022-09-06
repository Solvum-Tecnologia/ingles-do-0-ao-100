import React, { useEffect } from 'react';
import Aos from 'aos';

import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { primary } from './styles/colors';
import GlobalStyles from './styles/global';
import 'aos/dist/aos.css';
import { Hooks } from './hooks';

const App: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <ThemeProvider theme={primary}>
      <Hooks>
        <Home />
      </Hooks>
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
