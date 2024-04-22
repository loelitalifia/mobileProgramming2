import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Homescreen = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.text}>Selamat Datang {user ? user.name : 'Guest'}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7e97dc'
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    color: 'white'
  }
})

export default Homescreen;
