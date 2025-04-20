import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface IncidentTypeSelectorProps {
  type: string;
  setType: (text: string) => void;
}

const IncidentTypeSelector: React.FC<IncidentTypeSelectorProps> = ({ type, setType }) => {
  const handleSelect = (selectedType: string) => {
    setType(selectedType);
  };

  const isSelected = (itemType: string) => type === itemType;

  return (
    <View className="flex-col gap-y-4">
      <Text className="text-white text-lg font-semibold">Type of incident</Text>
      <View className="flex-row gap-x-4">
        <TouchableOpacity
          onPress={() => handleSelect('Sighting')}
          className={`flex-row items-center justify-center border ${
            isSelected('Sighting') ? 'border-blue-500 bg-blue-900' : 'border-white'
          } py-3 px-4 flex-1`}
        >
          <Text className={`font-semibold ${isSelected('Sighting') ? 'text-white' : 'text-gray-400'}`}>
            Sighting
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSelect('Arrest')}
          className={`flex-row items-center justify-center border ${
            isSelected('Arrest') ? 'border-blue-500 bg-blue-900' : 'border-white'
          } py-3 px-4 flex-1`}
        >
          <Text className={`font-semibold ${isSelected('Arrest') ? 'text-white' : 'text-gray-400'}`}>
            Arrest
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-x-4">
        <TouchableOpacity
          onPress={() => handleSelect('Home Raid')}
          className={`flex-row items-center justify-center border ${
            isSelected('Home Raid') ? 'border-blue-500 bg-blue-900' : 'border-white'
          } py-3 px-4 flex-1`}
        >
          <Text className={`font-semibold ${isSelected('Home Raid') ? 'text-white' : 'text-gray-400'}`}>
            Home Raid
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSelect('Workplace Raid')}
          className={`flex-row items-center justify-center border ${
            isSelected('Workplace Raid') ? 'border-blue-500 bg-blue-900' : 'border-white'
          } py-3 px-4 flex-1`}
        >
          <Text className={`font-semibold ${isSelected('Workplace Raid') ? 'text-white' : 'text-gray-400'}`}>
            Workplace Raid
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IncidentTypeSelector;