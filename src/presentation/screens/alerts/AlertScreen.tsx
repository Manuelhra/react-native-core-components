import React from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {Alert, StyleSheet, View} from 'react-native';

type AlertScreenProps = {};

export const AlertScreen = ({}: AlertScreenProps): React.JSX.Element => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true},
    );

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <CustomView>
      <Title text="Alerts" />

      <Button text="Alert - 2 buttons" onPress={createTwoButtonAlert} />

      <View style={styles.separator} />

      <Button text="Alert - 3 buttons" onPress={createThreeButtonAlert} />

      <View style={styles.separator} />

      <Button text="Alert - Prompt" />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
