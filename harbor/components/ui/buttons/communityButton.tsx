import CommunityIcon from '@/assets/images/buttonIcons/community';
import React from 'react';
import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native';

interface CommunityButtonProps {
    onPress: () => void; // Function to handle button press
    count: number; // Optional count to display
}

const CommunityButton: React.FC<CommunityButtonProps> = ({ onPress, count }) => {
    return (
    <Pressable onPress={onPress} className="bg-red-800 py-2 px-3 flex flex-row items-center w-100 h-10">
      <CommunityIcon/>

      <Text className="ml-2  text-white font-semibold mr-1">Community</Text>
      {count !== undefined && (
        <Text className="text-white font-semibold">({count})</Text>
      )}
    </Pressable>
  );
};

export default CommunityButton;