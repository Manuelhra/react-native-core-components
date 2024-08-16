import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {CardComponent} from '../../components/ui/CardComponent';
import {globalStyles, ThemeColors} from '../../../config/theme/theme';
import {
  ThemeContextType,
  ThemeContext,
  ThemeColor,
} from '../../context/ThemeContext';

type TextInputScreenProps = {};

export const TextInputScreen =
  ({}: TextInputScreenProps): React.JSX.Element => {
    const {colors, currentTheme} = useContext<ThemeContextType>(ThemeContext);

    const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
    });

    const styles = getStyles(colors, currentTheme);

    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <CustomView>
            <Title text="Text Inputs" />

            <CardComponent>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                autoCapitalize="words"
                autoCorrect={false}
                onChangeText={value => setForm({...form, name: value})}
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={value => setForm({...form, email: value})}
              />

              <TextInput
                style={styles.textInput}
                placeholder="Enter your phone"
                keyboardType="phone-pad"
                onChangeText={value => setForm({...form, phone: value})}
              />
            </CardComponent>

            <View style={styles.separator} />

            <CardComponent>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
              <Text style={styles.jsonText}>
                {JSON.stringify(form, null, 2)}
              </Text>
            </CardComponent>

            <CardComponent>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter your phone"
                keyboardType="phone-pad"
                onChangeText={value => setForm({...form, phone: value})}
              />
            </CardComponent>
          </CustomView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

const getStyles = (colors: ThemeColors, currentTheme: ThemeColor) =>
  StyleSheet.create({
    separator: {
      height: 10,
    },
    jsonText: {
      color: colors.text,
    },
    textInput: {
      ...globalStyles.input,
      color: colors.text,
      borderColor:
        currentTheme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
    },
  });
