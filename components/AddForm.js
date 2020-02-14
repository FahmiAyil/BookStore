import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { Input, Button } from 'react-native-elements';

const AddForm = ({ onSave, style }) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  const [writer, setWriter] = useState("")

  const saveText = () => {
    if(value !== ""){
      setError(false)
      onSave(value, writer)
      setValue("")
      setWriter("")
    } else {
      setError(true)
    }
  }

  return (
    <View style={{ marginBottom: 20, ...style }}>
      <Input
        placeholder='Input title of book ... '
        containerStyle={{ paddingVertical: 10 }}
        inputStyle={{ fontSize: 14 }}
        onChangeText={(e) => setValue(e)}
        value={value}
        errorStyle={{ color: 'red', display: error ? 'flex' : 'none' }}
        errorMessage="Data harus diisi!"
      />
      <Input
        placeholder='Input writer name ... '
        containerStyle={{ paddingVertical: 10 }}
        inputStyle={{ fontSize: 14 }}
        onChangeText={(e) => setWriter(e)}
        value={writer}
      />
      <Button
        icon={{
          name: "plus",
          size: 14,
          type:'font-awesome',
          color: "white"
        }}
        onPress={() => saveText()}
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