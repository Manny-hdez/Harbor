import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import ReportIcon from '@/assets/images/reportIcon';

interface PostReportHeaderProps {
    setPage: (index: number) => void;
    page: number;
    setIndex: (index: number) => void;
}

export const PostReportHeader: React.FC<PostReportHeaderProps> = ({ setPage, page, setIndex }) => {

  const handleBack = () => {
    if(page>1){
      setPage(page-1);
    } else {
      setIndex(1);
    }
    
  };

  const handleLanguageSelect = () => {
    console.log('Language selected');
  };

  return (
    <View className="py-4 px-4 bg-black">
      <View className="w-full">
        <Pressable onPress={handleBack}>
          <Text className="text-white text-base">Back</Text>
        </Pressable>
      </View>
      <View className=" w-full">
        <View className="mt-3 mr-4">
          <ReportIcon />
        </View>
        <Text className="text-white text-5xl font-semibold mt-4 mb-5">Post a report</Text>
      </View>
    </View>
  );
}