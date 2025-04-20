import React from 'react';
import { View, Text } from 'react-native';
import { ChevronDownIcon } from 'react-native-heroicons/solid';
import EyeIcon from '@/assets/images/eyeIcon';
import CommunityButton from './ui/buttons/communityButton';

const Header = () => {
  return (
    <View className=" px-4 flex items-center justify-between w-full bg-black">
      <View className="flex items-center px-10 w-full">
        <EyeIcon/>
        <Text className="text-white text-xl font-bold">ICE Reports</Text>
      </View>

      <View className="flex flex-row items-center">
        <CommunityButton onPress={() => console.log("hi")} count={0}/>
      </View>
    </View>
  );
};

export default Header;