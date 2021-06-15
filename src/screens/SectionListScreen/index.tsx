import React, {useContext} from 'react';
import {View, SafeAreaView, SectionList, Text} from 'react-native';
import HeaderTitle from '../../components/HeaderTitle';
import {ThemeContext} from '../../context/theme/ThemeContext';
import {casas} from '../../data/sectionItems';
import {theme} from '../../theme/appTheme';

export default function SectionListScreen() {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <View style={theme.container}>
        <SectionList
          sections={casas}
          keyExtractor={(item, index) => item + index}
          ListHeaderComponent={() => <HeaderTitle title="Section List" />}
          ListFooterComponent={() => (
            <Text>{'Total de casas ' + casas.length}</Text>
          )}
          renderItem={({item}) => (
            <Text style={{color: colors.text}}>{item}</Text>
          )}
          renderSectionHeader={({section}) => (
            <HeaderTitle title={section.casa} />
          )}
          ItemSeparatorComponent={() => <View style={[theme.separator]} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
