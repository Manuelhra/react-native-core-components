import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

type SeparatorProps = {
  style?: StyleProp<ViewStyle>;
};

export const Separator = ({style}: SeparatorProps): React.JSX.Element => {
  return <View style={[customStyles.container, style]} />;
};

const customStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    height: 1,
    backgroundColor: colors.text,
    opacity: 0.1,
  },
});
