import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {globalStyles, ThemeColors} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';

type TitleProps = {
  text: string;
  safe?: boolean;
  white?: boolean;
};

export const Title = ({
  text,
  safe = false,
  white = false,
}: TitleProps): React.JSX.Element => {
  const {colors} = useContext<ThemeContextType>(ThemeContext);
  const {top} = useSafeAreaInsets();

  const styles = getStyles({colors, safe: {applySafe: safe, top}, white});

  return <Text style={styles.customTitle}>{text}</Text>;
};

interface GetStylesProps {
  colors: ThemeColors;
  white: boolean;
  safe: {applySafe: boolean; top: number};
}

const getStyles = ({colors, safe, white}: GetStylesProps) =>
  StyleSheet.create({
    customTitle: {
      ...globalStyles.title,
      marginBottom: 10,
      color: white ? colors.white : colors.text,
      marginTop: safe.applySafe ? safe.top : 0,
    },
  });
