import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext, ThemeContextType} from '../../context/ThemeContext';
import {ThemeColors} from '../../../config/theme/theme';

type ChangeThemeScreenProps = {};

export const ChangeThemeScreen =
  ({}: ChangeThemeScreenProps): React.JSX.Element => {
    const {currentTheme, colors, setTheme} =
      useContext<ThemeContextType>(ThemeContext);
    const styles = getStyles(colors);

    return (
      <CustomView style={styles.container}>
        <Title text={`Change theme: ${currentTheme}`} safe />

        <Button text="Light" onPress={() => setTheme('light')} />

        <View style={styles.separator} />

        <Button text="Dark" onPress={() => setTheme('dark')} />

        <View style={styles.separator} />

        <Text style={styles.text}>{JSON.stringify(colors, null, 2)}</Text>
      </CustomView>
    );
  };

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      padding: 20,
    },
    separator: {
      height: 20,
    },
    text: {
      color: colors.text,
    },
  });
