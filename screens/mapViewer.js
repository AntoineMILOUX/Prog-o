import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View,Dimensions  } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
navigator.geolocation.getCurrentPosition(
  position => {
    const location = JSON.stringify(position);

    this.setState({ location });

  },
  error => Alert.alert(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
);

export default function LinksScreen() {
  return (
    <View style={styles.container}>

    <MapView style={styles.mapStyle}   initialRegion={{
      latitude: 49.443659399999994,
      longitude:1.1023551999999999,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} />
    
  </View>
  
    
  );
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
