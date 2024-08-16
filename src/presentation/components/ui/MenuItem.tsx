import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {NavigationParams} from '../../navigation/Navigation';
import {Separator} from './Separator';
import {ThemeColors} from '../../../config/theme/theme';
import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';

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
  const {colors} = useContext<ThemeContextType>(ThemeContext);
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

  const styles = getStyles(colors, isFirst, isLast);

  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View style={styles.container}>
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

const getStyles = (colors: ThemeColors, isFirst: boolean, isLast: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: colors.cardBackground,
      borderTopLeftRadius: isFirst ? 10 : 0,
      borderTopRightRadius: isFirst ? 10 : 0,
      paddingTop: isFirst ? 10 : 0,
      borderBottomLeftRadius: isLast ? 10 : 0,
      borderBottomRightRadius: isLast ? 10 : 0,
      paddingBottom: isLast ? 10 : 0,
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
