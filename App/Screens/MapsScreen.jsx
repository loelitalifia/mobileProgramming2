import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{user ? user.name : 'Guest'}</Text>
      <Text style={styles.text}>Maps</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.2088,
          longitude: 106.8456,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: -6.2088, longitude: 106.8456 }}
          title="Monas"
          description="Monumen Nasional"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284aa4'
  },
  map: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    padding: 25
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
  }
});

export default MapScreen;
