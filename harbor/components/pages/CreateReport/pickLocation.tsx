import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, LatLng, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import PickLocationHeader from './pickLocationHeader';

// Dark mode style JSON
const darkModeStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#212121' }],
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#212121' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#181818' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#1b1b1b' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{ color: '#2c2c2c' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8a8a8a' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#373737' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#3c3c3c' }],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [{ color: '#4e4e4e' }],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#3d3d3d' }],
  },
];

interface LocationSelectorProps {
  initialRegion?: Region;
  onLocationSelect: (location: LatLng) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  initialRegion,
  onLocationSelect,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);

  const defaultRegion: Region = {
    latitude: 38.5816,
    longitude: -121.4944,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMapPress = (event: any) => {
    console.log("LOCATION SELECTED");
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const location = { latitude, longitude };
    setSelectedLocation(location);
  };

  const handleSelectLocation = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
    } else {
      console.warn('No location selected.');
    }
  };

  return (
    <View className="bg-black h-full w-full pt-16" style={styles.container}>
      <PickLocationHeader />
      <MapView
        style={styles.map}
        region={initialRegion || defaultRegion}
        onPress={handleMapPress}
        customMapStyle={darkModeStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        userInterfaceStyle={'dark'}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>

      <TouchableOpacity
        onPress={handleSelectLocation}
        className="absolute bottom-20 left-8 right-8 bg-red-500 p-3 items-center justify-center"
      >
        <Text className="text-white font-semibold text-lg">Select Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default LocationSelector;