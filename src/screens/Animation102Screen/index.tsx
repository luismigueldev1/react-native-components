import React, {useRef} from 'react';
import {
  Animated,
  PanResponder,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Animation102Screen() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.blueBox]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBox: {
    backgroundColor: '#75CEDB',
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
});
