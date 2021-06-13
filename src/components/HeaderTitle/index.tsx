import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

export default function HeaderTitle({title}: Props) {
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
