// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, {PropsWithChildren, useContext} from 'react';

import {Navigation} from './presentation/navigation/Navigation';
import {
  ThemeContext,
  ThemeContextType,
  ThemeProvider,
} from './presentation/context/ThemeContext';

const AppNavigation = ({children}: PropsWithChildren): React.JSX.Element => {
  const {currentTheme} = useContext<ThemeContextType>(ThemeContext);

  const theme = currentTheme === 'dark' ? DarkTheme : DefaultTheme;

  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};

const AppTheme = ({children}: PropsWithChildren): React.JSX.Element => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};

type AppProps = {};

export const App = ({}: AppProps): React.JSX.Element => {
  return (
    <AppTheme>
      <Navigation />
    </AppTheme>
  );
};
