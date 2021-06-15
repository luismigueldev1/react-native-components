import React, {useState, useContext} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Slide, slideItems} from '../../data/slideItems';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigators/Navigator';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/theme/ThemeContext';

const {height: windowHeight, width: windowWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParams, 'SlideScreen'> {}

export default function SlideScreen({navigation}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const renderItem = (item: Slide) => {
    return (
      <View style={{...styles.slideItem, backgroundColor: colors.background}}>
        <Image source={item.img} style={styles.slideItemImage} />
        <Text style={{...styles.slideItemTitle, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{color: colors.text}}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: colors.background}}>
      <Carousel
        //ref={}
        data={slideItems}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          index == 2 && fadeIn();
        }}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={slideItems.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.dotStyle}
        />
        {activeIndex == slideItems.length - 1 && (
          <Animated.View style={{opacity}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.paginationButton}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.paginationButtonText}>Entrar</Text>
              <Icon name="chevron-forward-outline" color="white" size={18} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  slideItem: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',

    borderRadius: 5,
    padding: 20,
  },

  slideItemImage: {
    width: windowWidth,
    height: windowHeight * 0.45,
    resizeMode: 'contain',
  },
  slideItemTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#5856D6',
    marginTop: 15,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#5856D6',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  paginationButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#5856D6',
    borderRadius: 8,
  },
  paginationButtonText: {
    color: 'white',
    marginRight: 5,
  },
});
