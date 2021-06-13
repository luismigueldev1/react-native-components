import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {FlatListItem} from '../../components/FlatListItem';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme/appTheme';
import {FlatListHeader} from '../../components/FlatListHeader';
import {menuItems} from '../../data/menuItems';

export default function HomeScreen() {
  return (
    <SafeAreaView style={theme.container}>
      <View>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <FlatListItem menuItem={item} />}
          keyExtractor={item => item.name}
          ListHeaderComponent={() => (
            <FlatListHeader title="Opciones del menú" />
          )}
          ItemSeparatorComponent={() => <View style={theme.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}
