import CommunityIcon from '@/assets/images/buttonIcons/community';
 import OrgVerifiedIcon from '@/assets/images/buttonIcons/orgVerified';
 import React from 'react';
 import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native';
 
 interface OrgVerifiedButtonProps {
     onPress: () => void; // Function to handle button press
     count: number; // Optional count to display
 }
 
 const OrgVerifiedButton: React.FC<OrgVerifiedButtonProps> = ({ onPress, count }) => {
     return (
     <Pressable onPress={onPress} className="bg-blue-800 py-2 px-3 flex flex-row items-center w-100 h-10">
       <OrgVerifiedIcon/>
 
       <Text className="ml-2 text-white font-semibold mr-1">Org-verified</Text>
       {count !== undefined && (
         <Text className="text-white font-semibold">({count})</Text>
       )}
     </Pressable>
   );
 };
 
 export default OrgVerifiedButton;