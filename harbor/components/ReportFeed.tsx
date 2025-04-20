import React from 'react';
import { View, Dimensions } from 'react-native'; // Import Dimensions
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SightingCard from './sightingCard';
import { Report } from '@/types';

const { height: screenHeight } = Dimensions.get('window'); // Get screen height

interface ReportFeedProps {
  reports: Report[];
}

const ReportFeed: React.FC<ReportFeedProps> = ({ reports }) => {
  return (
    <KeyboardAwareScrollView
      className="p-4"
      style={{ height: screenHeight * 0.5, borderWidth: 1}} // Add a temporary fixed height and border
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="gap-y-5">
        {reports.map((report) => (
          <SightingCard key={report.id} report={report} />
        ))}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ReportFeed;