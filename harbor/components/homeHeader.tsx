import React from 'react';
import { View, Text } from 'react-native';
import { ChevronDownIcon } from 'react-native-heroicons/solid';
import EyeIcon from '@/assets/images/eyeIcon';
import CommunityButton from './ui/buttons/communityButton';

const Header = () => {
  return (
    <View className=" px-4 flex items-center justify-between w-full">
      <View className="flex items-center px-10 w-full">
        <EyeIcon/>
        <Text className="text-white text-xl font-bold">ICE Reports</Text>
        <Text className="text-white mr-1">EN</Text>
      </View>

      <View className="flex-row items-center">
        <View className="w-5 h-3 rounded-sm bg-white items-center justify-center">
        <CommunityButton onPress={() => console.log("hi")} />
        <ChevronDownIcon className="text-white ml-1" size={16} />
        </View>
    </View>
    </View>
  );
};

export default Header;