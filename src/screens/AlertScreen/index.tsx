import React from 'react';
import {Alert, StyleSheet, Button, Platform} from 'react-native';
import {View} from 'react-native';
import HeaderTitle from '../../components/HeaderTitle';
import {theme} from '../../theme/appTheme';

export default function AlertScreen() {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('Ok pressed'),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  const showPrompt = () => {
    Alert.prompt(
      'Esta seguro?',
      'Esta accion no se puede revertir',
      (valor: string) => console.log('info: ', valor),
      'plain-text',
    );
  };
  return (
    <View style={theme.globalContainer}>
      <HeaderTitle title="Alert" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      {Platform.OS === 'ios' && (
        <Button title="Mostrar prompt" onPress={showPrompt} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
