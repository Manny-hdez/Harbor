import React, { useCallback, useRef } from 'react';
import MapViewComponent from '@/components/mapView';
import { View } from 'react-native';
import { Report } from '@/types';
import Header from '@/components/homeHeader';
import SheetView from '@/components/ui/sheetView';
import SheetHeader from '@/components/sheetHeader';
import ReportFeed from '@/components/ReportFeed';

export default function HomeScreen() {
  const markers: Report[] = [
    { id: 1, latitude: 38.5449, longitude: -121.7405, title:"SIGHTING", description:"Four armed ICE agents wearing POLICE vests were spotted outside station", address: "", isSOS: true, isVerified: false, date: new Date('2025-04-19T10:00:00Z') }, // Central Davis
    { id: 2, latitude: 38.5503, longitude: -121.7356, title:"SOS REPORT", description:"Four armed ICE agents wearing POLICE vests were spotted outside station", address: "", isSOS: false, isVerified: true, date: new Date('2025-04-19T10:30:00Z') }, // UC Davis Campus
    { id: 3, latitude: 38.5412, longitude: -121.7486, title:"HOME RAID", description:"Four armed ICE agents wearing POLICE vests were spotted outside station", address: "", isSOS: false, isVerified: false, date: new Date('2025-04-19T11:00:00Z') }, // South Davis
    { id: 4, latitude: 38.5539, longitude: -121.7591, title:"WORKPLACE RAID", description:"Four armed ICE agents wearing POLICE vests were spotted outside station", address: "", isSOS: false, isVerified: true, date: new Date('2025-04-19T11:30:00Z') }, // West Davis
    { id: 5, latitude: 38.5394, longitude: -121.7302, title:"ARREST", description:"Four armed ICE agents wearing POLICE vests were spotted outside station", address: "", isSOS: true, isVerified: false, date: new Date('2025-04-19T12:00:00Z') }, // East Davis
  ];

  return (
    <View className='bg-black h-full w-full pt-16'>
        <Header/>
        <View className='h-full'>
          <MapViewComponent markers={markers} />
          <SheetView>
            <View>
              <SheetHeader/>
              <ReportFeed reports={markers}/>
            </View>
          </SheetView>
        </View>
    </View>
  );
}