import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {MenuItem} from '../../components/ui/MenuItem';
import {NavigationParams} from '../../navigation/Navigation';

type Item = {
  name: string;
  icon: string;
  component: keyof NavigationParams;
};

export const animationMenuItems: Item[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'animation102Screen',
  },
];

export const menuItems: Item[] = [
  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'pullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'customSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'modalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'infiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'slidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'changeThemeScreen',
  },
];

export const uiMenuItems: Item[] = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'switchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'alertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'textInputScreen',
  },
];

type HomeScreenProps = {};

export const HomeScreen = ({}: HomeScreenProps): React.JSX.Element => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Opciones del Menu" safe />

          {animationMenuItems.map(item => (
            <MenuItem
              key={item.component}
              isFirst={item === menuItems[0]}
              isLast={item === menuItems[menuItems.length - 1]}
              {...item}
            />
          ))}

          <View style={styles.separatorItemSection} />

          {menuItems.map(item => (
            <MenuItem
              key={item.component}
              isFirst={item === menuItems[0]}
              isLast={item === menuItems[menuItems.length - 1]}
              {...item}
            />
          ))}

          <View style={styles.separatorItemSection} />

          {uiMenuItems.map(item => (
            <MenuItem
              key={item.component}
              isFirst={item === menuItems[0]}
              isLast={item === menuItems[menuItems.length - 1]}
              {...item}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  separatorItemSection: {
    marginTop: 30,
  },
});
