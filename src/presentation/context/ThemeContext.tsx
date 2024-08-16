import React, {createContext, useEffect} from 'react';
import {Appearance, AppState} from 'react-native';

import {darkColors, lightColors, ThemeColors} from '../../config/theme/theme';

export type ThemeColor = 'light' | 'dark';

export interface ThemeContextType {
  currentTheme: ThemeColor;
  colors: ThemeColors;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'light',
  colors: lightColors,
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.JSX.Element => {
  // const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = React.useState<ThemeColor>('light');

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();

      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
      console.log(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  /*   useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]); */

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colors: currentTheme === 'light' ? lightColors : darkColors,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
