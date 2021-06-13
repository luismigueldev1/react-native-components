import React, {useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderTitle from '../../components/HeaderTitle';
import {theme} from '../../theme/appTheme';

export default function PullToRefreshScreen() {
  const [refresing, setRefresing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefresing(true);
    setTimeout(() => {
      console.log('onRefresh');
      setData('hola mundo');
      setRefresing(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresing}
            onRefresh={onRefresh}
            progressViewOffset={10}
            progressBackgroundColor="black"
            colors={['white', 'red', 'orange']}
          />
        }>
        <View style={theme.container}>
          <HeaderTitle title="Pull to Refresh" />
          {data && <HeaderTitle title={data} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
