import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

type CustomViewProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const CustomView = ({
  style,
  children,
}: CustomViewProps): React.JSX.Element => {
  return <View style={[customStyles.container, style]}>{children}</View>;
};

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
