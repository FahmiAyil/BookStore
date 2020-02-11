import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { Input, Button } from 'react-native-elements';

const AddForm = ({ onSave }) => {
  const [value, setValue] = useState('')

  return (
    <View style={{ marginBottom: 20 }}>
      <Input
        placeholder='Input title of book'
        containerStyle={{ paddingVertical: 10 }}
        inputStyle={{ fontSize: 14 }}
        onChangeText={(e) => setValue(e)}
        // errorStyle={{ color: 'red' }}
        // errorMessage='ENTER A VALID ERROR HERE'
      />
      <Button
        icon={{
          name: "plus",
          size: 14,
          type:'font-awesome',
          color: "white"
        }}
        onPress={() => onSave(value)}
      />
    </View>
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

export default AddForm