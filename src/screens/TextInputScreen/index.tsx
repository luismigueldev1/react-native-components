import React from 'react';
import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomSwitch from '../../components/CustomSwitch';
import HeaderTitle from '../../components/HeaderTitle';
import {useForm} from '../../hooks/useForm';
import {theme} from '../../theme/appTheme';

export default function TextInputScreen() {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <HeaderTitle title="Text Inputs" />
            <TextInput
              style={styles.input}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
            />

            <View style={styles.switchRow}>
              <Text>Suscribirse</Text>
              <CustomSwitch
                isOn={form.isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />
            </View>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su telefono"
              keyboardType="phone-pad"
              onChangeText={value => onChange(value, 'phone')}
            />

            <Text>{JSON.stringify(form, null, 3)}</Text>
            <View style={theme.h100} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '85%',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: 'grey',
    marginBottom: 10,
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
