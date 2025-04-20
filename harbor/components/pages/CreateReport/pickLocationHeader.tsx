import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function PickLocationHeader() {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleLanguageSelect = () => {
    console.log('Language selected');
  };

  return (
    <View className="py-4 px-4 flex-col items-center justify-between bg-black">
      <View className='w-full'>
        <Pressable onPress={handleCancel}>
          <Text className="text-white text-base">Cancel</Text>
        </Pressable>
      </View>
        <Text className="w-full mt-6 text-white text-3xl font-semibold text-left">Select incident location</Text>
    </View>
  );
}