import React, {useContext} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {ThemeContext, ThemeContextType} from '../../context/ThemeContext';

type CustomViewProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const CustomView = ({
  style,
  children,
}: CustomViewProps): React.JSX.Element => {
  const {colors} = useContext<ThemeContextType>(ThemeContext);

  return (
    <View
      style={[
        customStyles.container,
        {backgroundColor: colors.background},
        style,
      ]}>
      {children}
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
