import React, {useContext, useState} from 'react';
import {Modal, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {
  ThemeColor,
  ThemeContext,
  ThemeContextType,
} from '../../context/ThemeContext';

type ModalScreenProps = {};

export const ModalScreen = ({}: ModalScreenProps): React.JSX.Element => {
  const {currentTheme} = useContext<ThemeContextType>(ThemeContext);
  const {bottom} = useSafeAreaInsets();

  const styles = getStyles(currentTheme);

  const getCustomStyle = (): StyleProp<ViewStyle> => {
    return {
      marginBottom: bottom,
    };
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView style={styles.container}>
      <Title text="Modal" safe />

      <Button text="Open modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={[styles.modalContainer, getCustomStyle()]}>
          <View style={styles.modalContent}>
            <Title text="Modal Content" safe />
          </View>

          <Button
            text="Close"
            onPress={() => setIsVisible(false)}
            styles={styles.closeButton}
          />
        </View>
      </Modal>
    </CustomView>
  );
};

const getStyles = (currentTheme: ThemeColor) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      backgroundColor:
        currentTheme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    },
    closeButton: {
      borderRadius: 0,
    },
  });
