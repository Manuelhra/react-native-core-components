// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Navigation} from './presentation/navigation/Navigation';

type AppProps = {};

export const App = ({}: AppProps): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
