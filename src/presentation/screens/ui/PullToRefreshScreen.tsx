import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {ScrollView} from 'react-native-gesture-handler';
import {RefreshControl, StyleSheet} from 'react-native';

type PullToRefreshScreenProps = {};

export const PullToRefreshScreen =
  ({}: PullToRefreshScreenProps): React.JSX.Element => {
    const {top} = useSafeAreaInsets();
    const [isRefreshing, setIsRefreshing] = React.useState(false);

    const onRefresh = () => {
      setIsRefreshing(true);

      setTimeout(() => {
        setIsRefreshing(false);
      }, 3000);
    };

    return (
      <CustomView>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              progressViewOffset={top}
              colors={['#5856D6', '#FF9427', '#9B1C31']}
              onRefresh={onRefresh}
            />
          }>
          <CustomView style={styles.container}>
            <Title text="Pull to Refresh" safe />
          </CustomView>
        </ScrollView>
      </CustomView>
    );
  };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
