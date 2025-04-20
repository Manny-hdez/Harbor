import React from 'react';
import { View, Text } from 'react-native';
import { EyeIcon } from 'react-native-heroicons/outline';
import { Report } from '@/types';

interface SightingCardProps {
  report: Report;
}

const SightingCard: React.FC<SightingCardProps> = ({ report }) => {
  const { date, address, isSOS, isVerified, description, title } = report;

  const getTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    } else {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    }
  };

  return (
    <View className="p-4">
      {/* Header */}
      <View className="flex-row items-center mb-2">
        <EyeIcon size={20} color="#FFFFFF" className="mr-2" />
        <Text className="ml-2 text-white text-lg font-bold">{title}</Text>
      </View>

      {/* Details */}
      <View className="flex-row items-center mb-2">
        <Text className="text-gray-400 text-sm">{getTimeAgo(date)}</Text>
        <Text className="text-gray-400 text-sm mx-2">・</Text>
        <Text className="text-gray-400 text-sm">{address || 'Unknown Location'}</Text>
      </View>

      {/* Description */}
      <Text className="text-white text-base">{description}</Text>
    </View>
  );
};

export default SightingCard;