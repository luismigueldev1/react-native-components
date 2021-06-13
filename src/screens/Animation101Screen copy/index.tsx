import React from 'react';
import {Dimensions, StyleSheet, View, Animated, Button} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

const windowWidth = Dimensions.get('window').width;

export default function Animation101Screen() {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}></Animated.View>
      <Button
        title="fadein"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button title="fadeOut" onPress={() => fadeOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
});
