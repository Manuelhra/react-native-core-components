// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Navigation} from './presentation/navigation/Navigation';
import {ThemeProvider} from './presentation/context/ThemeContext';

type AppStateProps = {
  children: React.ReactNode;
};

const AppState = ({children}: AppStateProps): React.JSX.Element => {
  return (
    <ThemeProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};

type AppProps = {};

export const App = ({}: AppProps): React.JSX.Element => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};
