import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Onboarding() {
  const router = useRouter();

  const goToSOSContact = () => {
    router.push("/sos-contact");
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-1 relative overflow-hidden bg-red-800">
        {/* Mock status bar content */}
        <SafeAreaView className="w-full px-2.5 flex-row justify-between items-center">
          
        </SafeAreaView>

        {/* Language selector */}
        <View className="absolute right-6 top-10 flex-row items-center gap-1.5">
          <Text className="text-white text-base">EN 🇺🇸</Text>
          <View className="w-6 h-6 relative overflow-hidden">
            <View className="w-3.5 h-1.5 absolute left-[5] top-[9] border-2 border-white" />
          </View>
        </View>

        {/* Top gradient circle overlay */}
        <View className="absolute -left-[350] -top-[150] w-[570px] h-[570px] rounded-full bg-red-500 opacity-30" />

        {/* Center content container - moved down */}
        <View className="items-center justify-center mt-60">
          {/* App Logo */}
          <View className="items-center">
            <View className="relative">
              <Image 
                source={require('../assets/images/Harbor.png')} 
                className="w-72 h-16" 
                resizeMode="contain"
              />
              <View className="absolute right-10 top-4">
                <Image 
                  source={require('../assets/images/Vector.png')} 
                  className="w-12 h-12" 
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Description text - now part of the same container */}
            <Text className="text-white text-base mt-8">
              Stay protected & know your rights
            </Text>
          </View>
        </View>

        {/* Get Started Button */}
        <View className="flex-row justify-center absolute bottom-12 w-full">
          <TouchableOpacity 
            className="bg-white py-2.5 px-4 w-96 items-center rounded-md"
            onPress={goToSOSContact}
          >
            <Text className="text-[#dc2626] text-base font-normal">Get started</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Stack.Screen options={{ 
        headerShown: false,
        animation: 'slide_from_right'
      }} />
    </View>
  );
} 