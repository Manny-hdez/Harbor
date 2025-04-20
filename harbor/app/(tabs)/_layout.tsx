import React from 'react';
import { Tabs } from 'expo-router';
import { BottomNavBar } from '@/components/BottomNavBar';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNavBar currentRoute={props.state.routeNames[props.state.index]} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
        }}
      />
    </Tabs>
  );
}
