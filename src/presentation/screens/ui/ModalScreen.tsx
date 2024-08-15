import React, {useState} from 'react';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Button} from '../../components/ui/Button';
import {colors} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ModalScreenProps = {};

export const ModalScreen = ({}: ModalScreenProps): React.JSX.Element => {
  const {bottom} = useSafeAreaInsets();

  const getCustomStyle = (): StyleProp<ViewStyle> => {
    return {
      marginBottom: bottom,
    };
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView>
      <Title text="Modal" safe />

      <Button text="Open modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={[styles.modalContainer, getCustomStyle()]}>
          <View style={styles.modalContent}>
            <Title text="Modal Content" safe />
          </View>
          <Pressable
            style={styles.closeButton}
            onPress={() => setIsVisible(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  closeButton: {
    backgroundColor: colors.primary,
    padding: 10,
    width: '100%',
  },
  buttonText: {
    color: colors.buttonTextColor,
    textAlign: 'center',
  },
});
