import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Modal} from 'react-native';
import HeaderTitle from '../../components/HeaderTitle';
import {theme} from '../../theme/appTheme';

export default function ModalScreen() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={theme.container}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent>
        <View style={styles.modal}>
          {/* Contenido del modal */}
          <View style={styles.modalContent}>
            <HeaderTitle title="Modal " />
            <Text>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
