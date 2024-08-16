import React, {useContext} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';

import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';
import {ThemeColors} from '../../../config/theme/theme';

type CustomSwitchProps = {
  isOn: boolean;
  text?: string;
  onToggle?: (value: boolean) => void;
};

export const CustomSwitch = ({
  isOn,
  text,
  onToggle,
}: CustomSwitchProps): React.JSX.Element => {
  const {colors} = useContext<ThemeContextType>(ThemeContext);

  const styles = getStyles(colors);

  return (
    <View style={styles.switchRow}>
      {text && <Text style={styles.text}>{text}</Text>}

      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        trackColor={{false: '#3e3e3e', true: '#3e3e3e'}}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggle}
        value={isOn}
      />
    </View>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      color: colors.text,
    },
  });
