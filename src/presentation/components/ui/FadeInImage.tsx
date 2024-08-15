import React from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';

import {useAnimation} from '../../hooks/useAnimation';

type FadeInImageProps = {
  uri: string;
  style?: StyleProp<ImageStyle>;
};

export const FadeInImage = ({
  uri,
  style,
}: FadeInImageProps): React.JSX.Element => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = React.useState(true);

  const getCustomImageStyle = (): {opacity: Animated.Value} => {
    return {
      opacity: animatedOpacity,
    };
  };

  return (
    <View style={customStyles.container}>
      {isLoading && (
        <ActivityIndicator
          style={customStyles.activityIndicator}
          color={'gray'}
          size={30}
        />
      )}

      <Animated.Image
        source={{uri}}
        style={[style, getCustomImageStyle()]}
        onLoadEnd={() => {
          fadeIn({duration: 300});
          setIsLoading(false);
        }}
      />
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
  },
});
