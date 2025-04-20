import React from 'react';
import MapViewComponent from '@/components/mapView';
import { View } from 'react-native';
import SosPointer from '@/assets/images/pointers/sosPointer';
import { Marker } from '@/types';

export default function HomeScreen() {
  const markers: Marker[] = [
    { id: 1, latitude: 37.78825, longitude: -122.4324, isSOS: true, isVerified: false, date: new Date('2025-04-19T10:00:00Z') },
    { id: 2, latitude: 37.78925, longitude: -122.4334, isSOS: false, isVerified: false, date: new Date('2025-04-19T10:00:00Z') },
    { id: 3, latitude: 37.79025, longitude: -122.4344, isSOS: true, isVerified: false, date: new Date('2025-04-19T10:00:00Z') },
  ];

  return (
    <View className='bg-black h-full'>
       <MapViewComponent markers={markers} />
    </View>
  );
}