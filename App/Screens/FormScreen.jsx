import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FormScreen = ({ setUser }) => {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');

  const handleSaveUser = () => {
    if (name.trim() !== '') {
      setUser({ name });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name ? name : 'Guest'}</Text>
      {/* <FontAwesome style={styles.icon} name="wpforms" size={50} color="#b4c4ee" /> */}
      <View style={styles.icon}></View>
      <View style={styles.content}>
        <Text style={styles.text}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nama"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.text}>Hobi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Hobi"
          value={hobby}
          onChangeText={setHobby}
        />
        <Button
          title="Simpan"
          onPress={handleSaveUser}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e97dc'
  },
  text: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: '500'
  },
  content:{
    height: 'auto',
    margin: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignContent: 'center',
    top: -70
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textAlign: 'right',
    paddingTop: 40,
    padding: 15,
    backgroundColor: '#284aa4',
    borderBottomWidth: 2,
    borderBottomColor: '#102e7f'
  },
  icon: {
    backgroundColor: '#284aa4',
    alignSelf: 'center',
    padding: 14,
    // top: 50,
    // borderRadius: 10,
    width: '100%',
    height: '30%',
    // zIndex: 1
  }
})

export default FormScreen;
