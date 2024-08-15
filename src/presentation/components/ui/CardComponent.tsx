import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

type CardComponentProps = {
  styles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const CardComponent = ({
  children,
  styles,
}: CardComponentProps): React.JSX.Element => {
  return <View style={[customStyles.container, styles]}>{children}</View>;
};

const customStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 10,
  },
});
