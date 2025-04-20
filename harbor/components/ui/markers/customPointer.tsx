import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import SosPointer from '@/assets/images/pointers/sosPointer';
import CommunityPointer from '@/assets/images/pointers/communityPointer';
import OrgPointer from '@/assets/images/pointers/orgPointer';
import { Report } from '@/types';

interface CustomPointerProps {
  report: Report;
}

const CustomPointer: React.FC<CustomPointerProps> = ({ report }) => {
  const { latitude, longitude, isSOS, isVerified } = report;

  const renderPointer = () => {
    if (isSOS) {
      return <SosPointer />;
    } else if (!isVerified) {
      return <CommunityPointer />;
    } else {
      return <OrgPointer />;
    }
  };

  return (
    <Marker coordinate={{ latitude, longitude }} title={isSOS ? 'SOS Marker' : isVerified ? 'Org Marker' : 'Community Marker'}>
      <View style={styles.pointerContainer}>
        {renderPointer()}
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  pointerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomPointer;