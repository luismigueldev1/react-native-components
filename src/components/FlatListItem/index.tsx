import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export function FlatListItem({menuItem}: Props) {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.renderItemContainer}>
        <View style={styles.renderItemBox}>
          <Icon name={menuItem.icon} size={20} color={theme.colors.primary} />
          <Text style={{...styles.renderItemText, color: theme.colors.text}}>
            {menuItem.name}
          </Text>
        </View>

        <Icon
          name="chevron-forward-outline"
          size={20}
          color={theme.colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  renderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  renderItemBox: {
    flexDirection: 'row',
  },
  renderItemText: {
    marginLeft: 5,
  },
});
