import React from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';

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
  return (
    <View style={customStyles.switchRow}>
      {text && <Text style={customStyles.text}>{text}</Text>}

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

const customStyles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.text,
  },
});
