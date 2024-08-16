import React from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text} from 'react-native';

import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import {CustomView} from '../../components/ui/CustomView';

type Animation101ScreenProps = {};

export const Animation101Screen =
  ({}: Animation101ScreenProps): React.JSX.Element => {
    const {
      animatedOpacity,
      animatedTopPosition,
      fadeIn,
      fadeOut,
      startMovingTopPosition,
    } = useAnimation();

    const customPurpleBoxStyle = {
      opacity: animatedOpacity,
      transform: [{translateY: animatedTopPosition}],
    };

    return (
      <CustomView style={styles.container}>
        <Animated.View style={[styles.purpleBox, customPurpleBoxStyle]} />

        <Pressable
          style={styles.button}
          onPress={() => {
            fadeIn({});
            startMovingTopPosition({
              initialPosition: -100,
              easing: Easing.bounce,
            });
          }}>
          <Text>FadeIn</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => fadeOut({})}>
          <Text>FadeOut</Text>
        </Pressable>
      </CustomView>
    );
  };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 150,
    width: 150,
    margin: 20,
  },
  button: {
    minWidth: 150,
    paddingVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});
