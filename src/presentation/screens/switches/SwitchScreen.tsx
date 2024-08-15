import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {CustomView} from '../../components/ui/CustomView';
import {CardComponent} from '../../components/ui/CardComponent';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';

type SwitchScreenProps = {};

export const SwitchScreen = ({}: SwitchScreenProps): React.JSX.Element => {
  const [isOn, setIsOn] = useState(false);
  const [isHungry, setIsHungry] = useState(false);
  const [isHappy, setIsHappy] = useState(false);

  return (
    <CustomView style={customStyles.container}>
      <CardComponent>
        <CustomSwitch
          text="Is On"
          isOn={isOn}
          onToggle={value => setIsOn(value)}
        />
      </CardComponent>

      <Separator />

      <CardComponent>
        <CustomSwitch
          text="Is Hungry ?"
          isOn={isHungry}
          onToggle={value => setIsHungry(value)}
        />
      </CardComponent>

      <Separator />

      <CardComponent>
        <CustomSwitch
          text="Is Happy ?"
          isOn={isHappy}
          onToggle={value => setIsHappy(value)}
        />
      </CardComponent>
    </CustomView>
  );
};

const customStyles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 10,
  },
});
