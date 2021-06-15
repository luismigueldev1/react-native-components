import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderTitle from '../../components/HeaderTitle';
import {ThemeContext} from '../../context/theme/ThemeContext';
import {theme} from '../../theme/appTheme';

export default function ChangeThemeScreen() {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={theme.container}>
      <HeaderTitle title=" Theme" />
      <View style={styles.changeThemeButton}>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={styles.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={styles.buttonText}> Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  changeThemeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
