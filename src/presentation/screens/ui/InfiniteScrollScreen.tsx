import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';

import {CustomView} from '../../components/ui/CustomView';
import {FadeInImage} from '../../components/ui/FadeInImage';

type InfiniteScrollScreenProps = {};

export const InfiniteScrollScreen =
  ({}: InfiniteScrollScreenProps): React.JSX.Element => {
    const [numbers, setNumbers] = React.useState<number[]>([0, 1, 2, 3, 4, 5]);
    const [isLoading, setIsLoading] = React.useState(false);

    const loadMore = () => {
      setIsLoading(true);
      const newArray: number[] = Array.from(
        {length: 5},
        (_, i) => i + numbers.length,
      );

      setTimeout(() => {
        setNumbers([...numbers, ...newArray]);
        setIsLoading(false);
      }, 10);
    };

    return (
      <CustomView style={styles.container}>
        <FlatList
          data={numbers}
          onEndReached={loadMore}
          onEndReachedThreshold={0.6}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => <Item number={item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            isLoading ? <ActivityIndicatorComponent /> : null
          }
        />
      </CustomView>
    );
  };

const Item = ({number}: {number: number}) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/200/300`}
      style={styles.item}
    />
  );
};

const ActivityIndicatorComponent = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size={30} color="#bcb4b4" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  item: {
    height: 400,
    width: '100%',
  },
  activityIndicator: {
    justifyContent: 'center',
    height: 150,
  },
});
