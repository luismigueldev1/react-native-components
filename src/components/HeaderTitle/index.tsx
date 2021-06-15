import React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../context/theme/ThemeContext';

interface Props {
  title: string;
}

export default function HeaderTitle({title}: Props) {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
