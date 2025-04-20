import CommunityIcon from '@/assets/images/buttonIcons/community';
 import SosIcon from '@/assets/images/buttonIcons/sos';
 import React from 'react';
 import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native';
 
 interface SosButtonProps {
     onPress: () => void; // Function to handle button press
     count: number; // Optional count to display
 }
 
 const SosButton: React.FC<SosButtonProps> = ({ onPress, count }) => {
     return (
     <Pressable onPress={onPress} className="bg-gray-800 py-2 px-3 flex flex-row items-center w-100 h-10">
       <SosIcon/>
 
       <Text className="ml-2 text-white font-semibold mr-1">SOS</Text>
       {count !== undefined && (
         <Text className="text-white font-semibold">({count})</Text>
       )}
     </Pressable>
   );
 };
 
 export default SosButton;