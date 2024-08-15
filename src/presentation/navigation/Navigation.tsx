import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/home/HomeScreen';
import {Animation101Screen} from '../screens/animations/Animation101Screen';
import {Animation102Screen} from '../screens/animations/Animation102Screen';
import {SwitchScreen} from '../screens/switches/SwitchScreen';
import {AlertScreen} from '../screens/alerts/AlertScreen';
import {TextInputScreen} from '../screens/inputs/TextInputScreen';
import {PullToRefreshScreen} from '../screens/ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../screens/ui/CustomSectionListScreen';
import {ModalScreen} from '../screens/ui/ModalScreen';
import {InfiniteScrollScreen} from '../screens/ui/InfiniteScrollScreen';

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
      <Stack.Screen name="animation102Screen" component={Animation102Screen} />

      <Stack.Screen name="switchScreen" component={SwitchScreen} />
      <Stack.Screen name="alertScreen" component={AlertScreen} />
      <Stack.Screen name="textInputScreen" component={TextInputScreen} />

      <Stack.Screen
        name="pullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="customSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="modalScreen" component={ModalScreen} />
      <Stack.Screen
        name="infiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};
