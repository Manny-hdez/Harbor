import React from 'react';
import { View, Text } from 'react-native';
import PaperAirplaneIcon from '@/assets/images/PaperAirplaneIcon'; 
import ReportButton from '@/components/ui/buttons/addReportButton'; 
import { router, useRouter } from 'expo-router';

export default function SheetHeader() {
  const router = useRouter();


  const handlePressReport = () => {
    router.push('/create-report');
  };

  return (
    <View className="py-4 px-3 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <PaperAirplaneIcon />
        <Text className="ml-3 text-white text-3xl font-semibold">San Francisco</Text>
      </View>

      <ReportButton
        onPress={handlePressReport}
      />
    </View>
  );
};

