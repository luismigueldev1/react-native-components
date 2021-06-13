import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomSwitch from '../../components/CustomSwitch';
import HeaderTitle from '../../components/HeaderTitle';

interface State {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export default function SwitchScreen() {
  const [state, setState] = useState<State>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return (
    <View style={styles.container}>
      <HeaderTitle title="Switch" />
      <View style={styles.switchRow}>
        <Text>isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text>isActive</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text>isActive</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.switchText}> {JSON.stringify(state, null, 3)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchText: {
    fontSize: 18,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
