import React, {useState} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export default function FadeInImage({uri, style}: Props) {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    fadeIn();
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <View style={styles.loader}>
            <ActivityIndicator size={28} color="black" />
          </View>
        </View>
      )}

      <Animated.Image
        source={{uri}}
        style={{...styles.image, ...(style as any), opacity}}
        onLoadEnd={finishLoading}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
  },
  loaderContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    width: '100%',
    height: 400,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 30,
  },
});
