import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/home/HomeScreen';
import {Animation101Screen} from '../screens/animations/Animation101Screen';

export type NavigationParams = {
  homeScreen: undefined;
  animation101Screen: undefined;
  animation102Screen: undefined;
  pullToRefreshScreen: undefined;
  customSectionListScreen: undefined;
  modalScreen: undefined;
  infiniteScrollScreen: undefined;
  slidesScreen: undefined;
  changeThemeScreen: undefined;
  switchScreen: undefined;
  alertScreen: undefined;
  textInputScreen: undefined;
};

const Stack = createStackNavigator<NavigationParams>();

type NavigationProps = {};

export const Navigation = ({}: NavigationProps): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="animation101Screen" component={Animation101Screen} />
    </Stack.Navigator>
  );
};
