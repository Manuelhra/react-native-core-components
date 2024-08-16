// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React from 'react';

import {Navigation} from './presentation/navigation/Navigation';
import {ThemeProvider} from './presentation/context/ThemeContext';

type AppProps = {};

export const App = ({}: AppProps): React.JSX.Element => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};
