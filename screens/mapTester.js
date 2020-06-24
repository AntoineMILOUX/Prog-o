
import * as React from 'react';
import { StyleSheet, Text, View,Dimensions, Image } from 'react-native';
import MapView,  { Marker } from 'react-native-maps';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            ready: false,
            where: {lat:null, lng:null},
            error: null
        }
        this.markers = [
            {
              latitude: 49.443659399999994,
              longitude: 1.1023551999999999,
              title: 'Foo Place',
              subtitle: '1234 Foo Drive'
            }
          ];
    }
    componentDidMount(){
        let geoOptions = {
            enableHighAccuracy: true,
   
            maximumAge: 60 * 60 * 24
        };
        this.setState({ready:false, error: null });
        navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                                this.geoFailure,
                                                geoOptions);
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);
        
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        this.setState({error: err.message});
    }
    render() {
        return (
            <View style={styles.container}>
            { !this.state.ready && (
            <Image 
            source={{uri: 'https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif'}}  
            style={{width: 100, height:100 }} 
        />
            )}
            { this.state.error && (
            <Text style={styles.big}>{this.state.error}</Text>
            )}
            { this.state.ready && (
        
                <MapView style={styles.mapStyle}   initialRegion={{
                    latitude: this.state.where.lat,
                    longitude:this.state.where.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }} >
                           <Marker coordinate = {{latitude: this.state.where.lat,longitude: this.state.where.lng}}
         pinColor = {"purple"} // any color
         title={"Géolocalisation"}
         description={"Vous êtes ici."}/>
                  </MapView>
            )}

    

        </View>
        )
    }
}const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 48
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});