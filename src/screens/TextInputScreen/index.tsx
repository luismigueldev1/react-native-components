import React, {useContext} from 'react';
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
import {ThemeContext} from '../../context/theme/ThemeContext';
import {useForm} from '../../hooks/useForm';
import {theme} from '../../theme/appTheme';

export default function TextInputScreen() {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);

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
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Ingrese su email"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
            />

            <View style={styles.switchRow}>
              <Text style={{color: colors.text}}>Suscribirse</Text>
              <CustomSwitch
                isOn={form.isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />
            </View>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 3)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 3)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 3)}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su telefono"
              placeholderTextColor={colors.text}
              keyboardType="phone-pad"
              onChangeText={value => onChange(value, 'phone')}
            />

            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 3)}
            </Text>
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
