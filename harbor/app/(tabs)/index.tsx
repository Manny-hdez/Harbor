import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function HomeScreen() {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  const [markers, setMarkers] = useState([
    { id: 1, latitude: 37.78825, longitude: -122.4324, title: 'Marker 1' },
    { id: 2, latitude: 37.78925, longitude: -122.4334, title: 'Marker 2' },
    { id: 3, latitude: 37.79025, longitude: -122.4344, title: 'Marker 3' },
  ]);

  useEffect(() => {
    Geolocation.requestAuthorization('whenInUse').then(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        },
        (error) => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  }, []);

  if (!currentLocation) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={currentLocation} userInterfaceStyle={'dark'}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
          />
        ))}
        <Marker
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          title="You are here"
          pinColor="blue"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});