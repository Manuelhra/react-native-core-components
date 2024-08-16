import React, {useContext, useRef} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import {globalStyles, ThemeColors} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationParams} from '../../navigation/Navigation';
import {ThemeContextType, ThemeContext} from '../../context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

type SlidesScreenProps = {};

export const SlidesScreen = ({}: SlidesScreenProps): React.JSX.Element => {
  const {colors} = useContext<ThemeContextType>(ThemeContext);

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

  const styles = getStyles(colors);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = e.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true});
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        renderItem={({item}) => <SlideItem item={item} />}
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
      />

      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="End"
          styles={styles.button}
          onPress={() => navigation.navigate('homeScreen')}
        />
      ) : (
        <Button
          text="Next"
          styles={styles.button}
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        />
      )}
    </View>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    button: {
      position: 'absolute',
      bottom: 60,
      right: 30,
      width: 100,
    },
  });

interface SlideItemProps {
  item: Slide;
}

const getSlideStyles = (colors: ThemeColors, width: number) =>
  StyleSheet.create({
    slideContainer: {
      flex: 1,
      backgroundColor: colors.background,
      borderRadius: 5,
      padding: 40,
      justifyContent: 'center',
      width: width,
    },
    image: {
      width: width * 0.7,
      height: width * 0.7,
      resizeMode: 'center',
      alignSelf: 'center',
    },
    title: {
      ...globalStyles.title,
      color: colors.primary,
    },
    description: {
      color: colors.text,
      marginTop: 20,
    },
  });

const SlideItem = ({item}: SlideItemProps): React.JSX.Element => {
  const {colors} = useContext<ThemeContextType>(ThemeContext);

  const {title, img, desc} = item;
  const {width} = useWindowDimensions();
  const slideStyles = getSlideStyles(colors, width);

  return (
    <View style={slideStyles.slideContainer}>
      <Image style={slideStyles.image} source={img} />

      <Text style={slideStyles.title}>{title}</Text>
      <Text style={slideStyles.description}>{desc}</Text>
    </View>
  );
};
