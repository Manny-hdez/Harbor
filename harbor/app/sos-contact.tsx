import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function SOSContact() {
  const router = useRouter();

  const goToManualContact = () => {
    router.push({
      pathname: "/manual-contact",
    });
  };

  const goToImportContacts = () => {
    router.push({
      pathname: "/import-contacts",
    });
  };

  const goToMainApp = () => {
    router.push({
      pathname: "/(tabs)",
    });
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-1 relative overflow-hidden bg-red-800">
        {/* Mock status bar content */}
        <SafeAreaView className="w-full px-2.5 flex-row justify-between items-center">
           
        </SafeAreaView>

        {/* Background gradient circles */}
        <View className="absolute -left-[233] -top-[16] z-0">
          <View className="w-[570px] h-[570px] left-0 top-0 absolute opacity-10 bg-gradient-to-br from-transparent to-red-600 rounded-full" />
          <View className="w-[570px] h-[570px] left-[771] top-[352] absolute opacity-10 bg-gradient-to-br from-transparent to-red-600 rounded-full" />
        </View>

        <ScrollView className="flex-1 z-10">
          {/* Language selector */}
          <View className="absolute right-6 top-10 flex-row items-center gap-1.5">
            <Text className="text-white text-base">EN 🇺🇸</Text>
            <View className="w-6 h-6 relative overflow-hidden">
              <View className="w-3.5 h-1.5 absolute left-[5] top-[9] border-2 border-white" />
            </View>
          </View>

          {/* Back button */}
          <View className="absolute left-[40] top-[78]">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-5 h-5 bg-red-400" />
            </TouchableOpacity>
          </View>

          {/* Back navigation */}
          <View className="w-9 h-9 left-[40] top-[197] absolute overflow-hidden">
            <TouchableOpacity 
              className="w-9 h-9 bg-white"
              onPress={() => router.back()}
            />
          </View>

          {/* SOS Contact Title */}
          <Text className="left-[34] top-[269] absolute text-white text-4xl font-bold">
            SOS Contact
          </Text>

          {/* What is SOS section */}
          <View className="left-[34] top-[332] absolute flex-row items-center gap-2">
            <View className="w-5 h-5 relative overflow-hidden">
              <View className="w-4 h-4 left-[1.67] top-[1.67] absolute bg-white" />
            </View>
            <Text className="text-white text-base">What is SOS?</Text>
          </View>

          {/* SOS Description */}
          <Text className="w-[330px] left-[34] top-[377] absolute text-red-200 text-base">
            If you're facing an immigration emergency, press SOS to alert a trusted contact or legal support with a pre-written message
          </Text>

          {/* Main content with flexbox layout */}
          <View className="flex-1 mt-[450] px-5 pb-32">
            {/* Import manually button */}
            <TouchableOpacity 
              className="w-full p-4 mb-5 bg-red-800 border border-white flex-row justify-center items-center rounded"
              onPress={goToManualContact}
            >
              <Text className="text-white text-base">Import manually</Text>
            </TouchableOpacity>

            {/* Import from contacts button */}
            <TouchableOpacity 
              className="w-full p-4 mb-5 bg-white flex-row justify-center items-center rounded"
              onPress={goToImportContacts}
            >
              <Text className="text-red-800 text-base">Import from contacts</Text>
            </TouchableOpacity>

            {/* Onboarding progress indicators */}
            <View className="w-full flex-row justify-center mt-10 mb-5 space-x-2">
              <View className="w-2 h-2 rounded-full bg-red-300" />
              <View className="w-2 h-2 rounded-full bg-white" />
              <View className="w-2 h-2 rounded-full bg-red-300" />
            </View>

            {/* Skip section */}
            <View className="w-full flex-row justify-start mt-4">
              <TouchableOpacity onPress={goToMainApp}>
                <Text className="text-red-200 text-base">Skip</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>

      <Stack.Screen options={{ 
        headerShown: false,
        animation: 'slide_from_right'
      }} />
    </View>
  );
} 