import React from 'react';
import {View, SafeAreaView, SectionList, Text} from 'react-native';
import HeaderTitle from '../../components/HeaderTitle';
import {casas} from '../../data/sectionItems';
import {theme} from '../../theme/appTheme';

export default function SectionListScreen() {
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
          renderItem={({item}) => <Text>{item}</Text>}
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
