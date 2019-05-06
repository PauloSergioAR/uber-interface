import React, { Component } from 'react';
import { View } from 'react-native';
import { Platform, StyleSheet, Text } from 'react-native';

import MapView from 'react-native-maps';
import Search from '../Search'

// import { Container } from './styles';

export default class Map extends Component {
    state = {
        region: null,
    }
    async componentWillMount(){ 
        console.log("Trying to get location")       
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    }
                })
                console.log("Updating state")
            },
            () => {console.log("Failed")},
            {
                //timeout: 2000,
                enableHighAccuracy: true,
                //maximumAge: 1000,
            }
        )
    }
  render() {
    const {region} = this.state
    console.log(region)
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                loadingEnabled
                showsUserLocation
                showsCompass
            />
            <Search/>
        </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
});
