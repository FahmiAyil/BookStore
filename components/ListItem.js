import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

import { Icon } from 'react-native-elements'

const ListItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity style={ styles.listTouch }>
      <View style={ styles.rowList }>
        <Text>{item.text}</Text>
        <View>
          <Icon
            style={styles.icon}
            name='times-circle'
            type='font-awesome'
            size={18}
            onPress={() => onDelete(item.id)} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listTouch: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderColor: 'gainsboro'
  },
  rowList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ListItem