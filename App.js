import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView
} from 'react-native';

import { Button, ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
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

  const saveItem = (value, writer) => {
    setListData([...listData, {id: uuid(), text: value, writer}])
  }

  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View>
          <Header title="Book Store" />
          <AddForm style={{ paddingHorizontal: 15 }} onSave={saveItem} />
        </View>
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <ListItem item={item} onDelete={deleteItem} />
          )}
        />
      </View>

    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
});

export default App;
