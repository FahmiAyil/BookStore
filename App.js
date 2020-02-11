import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import {uuid} from 'uuidv4'

// components
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddForm from './components/AddForm'

// data
import data from './data'

const App = () => {
  const [listData, setListData] = useState(data)

  const deleteItem = (id) => {
    setListData((prefItem) => {
      return prefItem.filter(x =>  x.id !== id)
    })
  }

  const saveItem = (value) => {
    setListData([...listData, {id: uuid(), text: value}])
  }

  return (
    <View>
      <Header title="Book Store" />
      <AddForm onSave={saveItem} />
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <ListItem item={item} onDelete={deleteItem} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
});

export default App;
