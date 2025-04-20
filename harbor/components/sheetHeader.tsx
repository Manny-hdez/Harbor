import React from 'react';
import { View, Text } from 'react-native';
import PaperAirplaneIcon from '@/assets/images/PaperAirplaneIcon'; 
import ReportButton from '@/components/ui/buttons/addReportButton'; 

const SheetHeader = () => {
  return (
    <View className="py-4 px-3 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <PaperAirplaneIcon />
        <Text className="ml-3 text-white text-3xl font-semibold">San Francisco</Text>
      </View>

      <ReportButton
        onPress={() => {
          console.log('Report button pressed in header');
        }}
      />
    </View>
  );
};

export default SheetHeader;