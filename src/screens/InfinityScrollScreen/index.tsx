import React from 'react';
import {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import FadeInImage from '../../components/FadeInImage';
import HeaderTitle from '../../components/HeaderTitle';

export default function InfinityScrollScreen() {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/1024/1024`}
        style={{width: '100%', height: 400}}
      />
    );
  };
  return (
    <>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => <HeaderTitle title="Infinity Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={styles.loaderContainer}>
            <View style={styles.loader}>
              <ActivityIndicator size={28} color="black" />
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'gray',
    height: 150,
  },
  image: {
    width: '100%',
    height: 400,
    marginBottom: 10,
  },
  loaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 30,
  },
});
