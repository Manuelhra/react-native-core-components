import React, {useContext} from 'react';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';

import {globalStyles, ThemeColors} from '../../../config/theme/theme';
import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';

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
  const {colors} = useContext<ThemeContextType>(ThemeContext);
  const customStyles = getStyles(colors);

  return (
    <Pressable
      style={({pressed}) => [
        customStyles.container,
        pressed && customStyles.buttonPressed,
        styles,
      ]}
      onPress={onPress}>
      <Text style={customStyles.text}>{text}</Text>
    </Pressable>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      ...globalStyles.btnPrimary,
      opacity: 1,
      backgroundColor: colors.primary,
    },
    buttonPressed: {
      opacity: 0.8,
    },
    text: {
      ...globalStyles.btnPrimaryText,
      color: colors.buttonTextColor,
    },
  });
