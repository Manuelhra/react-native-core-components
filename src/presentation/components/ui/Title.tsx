import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
  const {top} = useSafeAreaInsets();

  const getCustomStyles = (): {color: string; marginTop: number} => {
    let customStyles: {color: string; marginTop: number} = {
      color: colors.text,
      marginTop: 0,
    };

    if (white) {
      customStyles.color = colors.white;
    }

    if (safe) {
      customStyles.marginTop = top;
    }

    return customStyles;
  };

  return (
    <Text style={[globalStyles.title, styles.customTitle, getCustomStyles()]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  customTitle: {
    marginBottom: 10,
  },
});
