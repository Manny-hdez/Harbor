import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDownIcon } from 'react-native-heroicons/solid';
import EyeIcon from '@/assets/images/eyeIcon';

const Header = () => {
  return (
    <View className="bg-black py-4 flex-row items-center justify-between">
      {/* Left Section */}
      <View className="flex-row items-center">
        <EyeIcon/>
        <Text className="text-white text-xl font-bold">ICE Reports</Text>
      </View>

      {/* Right Section */}
      <TouchableOpacity className="flex-row items-center">
        <Text className="text-white mr-1">EN</Text>
        <View className="w-5 h-3 rounded-sm bg-white items-center justify-center">
          <View className="w-4 h-2 rounded-sm bg-red-500" />
          <View className="w-4 h-2 rounded-sm bg-white" />
          <View className="w-4 h-2 rounded-sm bg-blue-500" />
        </View>
        <ChevronDownIcon className="text-white ml-1" size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;