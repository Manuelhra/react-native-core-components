import React, {useState} from 'react';
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
import {globalStyles} from '../../../config/theme/theme';

type TextInputScreenProps = {};

export const TextInputScreen =
  ({}: TextInputScreenProps): React.JSX.Element => {
    const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
    });

    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <CustomView>
            <Title text="Text Inputs" />

            <CardComponent>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter your name"
                autoCapitalize="words"
                autoCorrect={false}
                onChangeText={value => setForm({...form, name: value})}
              />

              <TextInput
                style={globalStyles.input}
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={value => setForm({...form, email: value})}
              />

              <TextInput
                style={globalStyles.input}
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

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  jsonText: {
    color: 'black',
  },
});
