import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function SOSMessage() {
  const router = useRouter();
  const [message, setMessage] = React.useState(
    "Emergency Alert: Requesting your immediate help. I may be detained or am in trouble. My current location is attached. Please check the location and assist as soon as possible.\n\n\n¡Alerta de Emergencia! Pido tu ayuda inmediata. Podría estar en detención o tengo problemas. Mi ubicación actual está adjunta. Por favor, revisa la ubicación y ayuda lo antes posible."
  );

  const goBack = () => {
    router.back();
  };

  const finishOnboarding = () => {
    // Save message to storage or context
    // Then navigate to main app
    router.push("/(tabs)");
  };

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      
      {/* Header area with back button */}
      <SafeAreaView className="w-full px-2.5 flex-row justify-between items-center">
        <TouchableOpacity 
          className="w-5 h-5 ml-[15] mt-[73] bg-red-400"
          onPress={goBack}
        />
        
        {/* Language selector */}
        <View className="flex-row items-center gap-1.5 mr-5 mt-[20]">
          <Text className="text-white text-base">EN 🇺🇸</Text>
          <View className="w-6 h-6 relative overflow-hidden">
            <View className="w-3.5 h-1.5 left-[5px] top-[9px] absolute border-2 border-white" />
          </View>
        </View>
      </SafeAreaView>

      {/* Main content */}
      <View className="px-5 pt-[100]">
        <Text className="text-white text-4xl font-bold mb-4">SOS Message</Text>
        
        <TouchableOpacity>
          <Text className="text-white text-base mb-5">Edit</Text>
        </TouchableOpacity>
        
        {/* Message box */}
        <View className="bg-gray-500 p-2.5 h-80">
          <View className="flex-row items-center mb-1">
            <Text className="text-white text-xs font-semibold">EN</Text>
          </View>
          <TextInput
            className="text-white text-base flex-1"
            multiline
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />
          <View className="absolute top-1/2 left-2.5">
            <Text className="bg-gray-500 text-white text-xs font-semibold">ES</Text>
          </View>
        </View>
      </View>

      {/* Bottom actions */}
      <View className="absolute bottom-[25] left-[30] right-[30] flex-row justify-between items-center">
        <TouchableOpacity onPress={goBack}>
          <Text className="text-white text-base">Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-white p-2.5 rounded w-36 items-center"
          onPress={finishOnboarding}
        >
          <Text className="text-black text-base">Finish</Text>
        </TouchableOpacity>
      </View>

      <Stack.Screen options={{ 
        headerShown: false,
        animation: 'slide_from_right'
      }} />
    </View>
  );
} 