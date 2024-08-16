import React, {useContext} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {ThemeColors} from '../../../config/theme/theme';
import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';

type CardComponentProps = {
  styles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const CardComponent = ({
  children,
  styles,
}: CardComponentProps): React.JSX.Element => {
  const {colors} = useContext<ThemeContextType>(ThemeContext);

  const customStyles = getStyles(colors);

  return <View style={[customStyles.container, styles]}>{children}</View>;
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.cardBackground,
      borderRadius: 10,
      padding: 10,
    },
  });
