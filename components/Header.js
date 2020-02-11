import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
  title: 'Shopping List'
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslateblue',
    height: 60,
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'snow'
  }
});

export default Header