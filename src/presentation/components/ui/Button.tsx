import React from 'react';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';

import {colors, globalStyles} from '../../../config/theme/theme';

type ButtonProps = {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const Button = ({
  text,
  styles,
  onPress,
}: ButtonProps): React.JSX.Element => {
  return (
    <Pressable
      style={({pressed}) => [
        customStyles.container,
        pressed && customStyles.buttonPressed,
        styles,
      ]}
      onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const customStyles = StyleSheet.create({
  container: {
    ...globalStyles.btnPrimary,
    opacity: 1,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  text: {
    ...globalStyles.btnPrimaryText,
    color: colors.buttonTextColor,
  },
});
