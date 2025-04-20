import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RedCard } from '@/components/ResourceDirectory';
import Feather from '@expo/vector-icons/Feather';
import Header from '@/components/homeHeader';

export default function HelpScreen() {
  return (
    <View className='bg-[#070707] h-full w-full pt-16'>
      <Header/>
        <RedCard/>
        <View className='flex flex-row mx-5 justify-end mt-3.5 gap-2 items-center'>
          <Feather name="wifi-off" size={12} color="#7C7C7C" />
          <Text className='text-[#7C7C7C]'>Available offline</Text>
        </View>
    </View>

  );
}
