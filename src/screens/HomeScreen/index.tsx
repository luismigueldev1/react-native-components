import React, {useContext} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {FlatListItem} from '../../components/FlatListItem';
import {theme} from '../../theme/appTheme';
import {FlatListHeader} from '../../components/FlatListHeader';
import {menuItems} from '../../data/menuItems';
import {ThemeContext} from '../../context/theme/ThemeContext';

export default function HomeScreen() {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
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
          ItemSeparatorComponent={() => (
            <View
              style={{...theme.separator, borderBottomColor: colors.text}}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
