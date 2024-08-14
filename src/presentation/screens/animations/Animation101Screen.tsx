import React, {useRef} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';

type Animation101ScreenProps = {};

export const Animation101Screen =
  ({}: Animation101ScreenProps): React.JSX.Element => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedScale = useRef(new Animated.Value(-100)).current;

    const customPurpleBoxStyle = {
      opacity: animatedOpacity,
      transform: [{translateY: animatedScale}],
    };

    const fadeIn = () => {
      Animated.parallel([
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.spring(animatedScale, {
          toValue: 1,
          friction: 4,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start(() => console.log('Animated finished'));
    };

    const fadeOut = () => {
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => animatedScale.resetAnimation());
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.purpleBox, customPurpleBoxStyle]} />

        <Pressable style={styles.button} onPress={fadeIn}>
          <Text>FadeIn</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={fadeOut}>
          <Text>FadeOut</Text>
        </Pressable>
      </View>
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
