import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PlusIcon from '@/assets/images/plusIcon';

interface ReportButtonProps {
  onPress: () => void;
}

const ReportButton: React.FC<ReportButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-md py-1 px-3 flex-row items-center"
    >
      <PlusIcon/>
      <Text className="ml-2 text-black text-lg">Report</Text>
    </TouchableOpacity>
  );
};

export default ReportButton;