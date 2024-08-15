import React from 'react';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {ScrollView} from 'react-native-gesture-handler';
import {RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            colors={['#5856D6', '#FF9427', '#9B1C31']}
            onRefresh={onRefresh}
          />
        }>
        <CustomView>
          <Title text="Pull to Refresh" />
        </CustomView>
      </ScrollView>
    );
  };
