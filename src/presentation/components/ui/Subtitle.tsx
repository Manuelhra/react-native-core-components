import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';

import {globalStyles, ThemeColors} from '../../../config/theme/theme';
import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';

type SubtitleProps = {
  text: string;
  safeArea?: boolean;
  backgroundColor?: string;
};

export const Subtitle = ({
  text,
  safeArea = false,
  backgroundColor,
}: SubtitleProps): React.JSX.Element => {
  const {colors} = useContext<ThemeContextType>(ThemeContext);

  const styles = getStyles(colors, safeArea, backgroundColor);

  return <Text style={styles.subtitle}>{text}</Text>;
};

const getStyles = (
  colors: ThemeColors,
  safeArea: boolean,
  backgroundColor?: string,
) =>
  StyleSheet.create({
    subtitle: {
      ...globalStyles.subTitle,
      marginBottom: 10,
      marginTop: safeArea ? 20 : 0,
      backgroundColor:
        typeof backgroundColor === 'string'
          ? backgroundColor
          : colors.background,
    },
  });
