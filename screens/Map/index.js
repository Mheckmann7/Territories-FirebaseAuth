

import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, Dimensions, Button } from 'react-native';
// import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
// import Nav from '../../components/Nav'
import Geolocation from '@react-native-community/geolocation';
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
// import RNLocation from 'react-native-location';
// import * as Permissions from 'expo-permissions';


export default function Map({ navigation }) {
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [locationStatus, setLocationStatus] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give current location
      (position) => {
        setLocationStatus('Loaded');
        //Setting Longitude state
        setCurrentLongitude(position.coords.longitude);
        //Setting Longitude state
        setCurrentLatitude(position.coords.latitude);

      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give location on location change
        setLocationStatus('Loaded');
        console.log(typeof(position.coords.latitude));
       
        //Setting Longitude state
        setCurrentLongitude(position.coords.longitude);
        //Setting Latitude state
        setCurrentLatitude(position.coords.latitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };


  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (currentLatitude) {
    text = JSON.stringify(currentLatitude, currentLongitude);

  }

//Wait to until we have the users location before displaying the map
  if (currentLatitude === null) {
    // Better loading logic here
    return <Text>Loading...</Text>
  }


  return (
    <View>
      {/* <Text>Latitude: {currentLatitude}   Longitude: {currentLongitude}</Text> */}
      <Text>{text}</Text>
      <Text>{locationStatus}</Text>

    <MapView
      style={styles.map}
      // centers the map on the users location 
      initialRegion={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 1,
            longitudeDelta: 1
          }} >
      <Marker
        //places a marker on the users initial location 
        key={1}
        coordinate={{ latitude: currentLatitude, longitude: currentLongitude}}
        />
    </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});