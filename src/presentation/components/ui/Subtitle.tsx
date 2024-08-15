import React from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';

import {colors, globalStyles} from '../../../config/theme/theme';

type SubtitleProps = {
  text: string;
  safeArea?: boolean;
  backgroundColor?: string;
};

export const Subtitle = ({
  text,
  safeArea = false,
  backgroundColor = colors.background,
}: SubtitleProps): React.JSX.Element => {
  const getCustomStyles = (): StyleProp<ViewStyle> => {
    return {
      marginTop: safeArea ? 20 : 0,
      backgroundColor,
    };
  };

  return <Text style={[styles.subtitle, getCustomStyles()]}>{text}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    ...globalStyles.subTitle,
    marginBottom: 10,
  },
});
