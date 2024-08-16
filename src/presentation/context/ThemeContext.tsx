import React, {createContext} from 'react';

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
  const [currentTheme, setCurrentTheme] = React.useState<ThemeColor>('light');

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
