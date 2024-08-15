import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {colors} from '../../../config/theme/theme';
import {NavigationParams} from '../../navigation/Navigation';
import {Separator} from './Separator';

type MenuItemProps = {
  name: string;
  icon: string;
  component: keyof NavigationParams;
  isFirst?: boolean;
  isLast?: boolean;
};

export const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: MenuItemProps): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

  const getContainerCustomStyles = (): ViewStyle => {
    let containerCustomStyles: ViewStyle = {};

    if (isFirst) {
      containerCustomStyles = {
        ...containerCustomStyles,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10,
      };
    }

    if (isLast) {
      containerCustomStyles = {
        ...containerCustomStyles,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingBottom: 10,
      };
    }

    return containerCustomStyles;
  };

  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View style={[styles.container, getContainerCustomStyles()]}>
          <IonIcon name={icon} style={styles.ionIcon} />
          <Text style={styles.text}>{name}</Text>
          <IonIcon name="chevron-forward-outline" style={styles.chevronIcon} />
        </View>
      </Pressable>

      {isLast === false && (
        <View>
          <Separator />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.cardBackground,
  },
  ionIcon: {
    marginRight: 10,
    color: colors.primary,
    fontSize: 25,
  },
  text: {
    color: colors.text,
  },
  chevronIcon: {
    fontSize: 25,
    marginLeft: 'auto',
    color: colors.primary,
  },
});
