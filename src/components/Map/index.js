import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
  state = {
    region: null
  };

  render() {

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: -23.573439,
            longitude: -46.613894,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }}
          showsUserLocation
          loadingEnabled
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});