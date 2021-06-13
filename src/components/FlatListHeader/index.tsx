import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
}
export function FlatListHeader({title}: Props) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
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
