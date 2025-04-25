import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ChevronDownIcon } from 'react-native-heroicons/solid';
import EyeIcon from '@/assets/images/eyeIcon';
import CommunityButton from './ui/buttons/communityButton';
import OrgVerifiedButton from './ui/buttons/orgVerifiedButton';
import SosButton from './ui/buttons/sosButton';

const Header = () => {
  return (
    <View className="flex items-center justify-between w-full bg-black">
      <View className="flex flex-row items-center px-5 w-full">
        <EyeIcon/>
        <Text className="ml-4 text-white text-3xl font-bold">ICE Reports</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        className="py-10"
      >
        <View className='gap-x-3 flex flex-row ml-2'>
            <CommunityButton onPress={() => console.log("hi")} count={1}/>
            <OrgVerifiedButton onPress={() => console.log("hi")} count={2}/>
            <SosButton onPress={() => console.log("hi")} count={2}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Header;