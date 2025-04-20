import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import "../global.css";

import PickLocationPage from '@/components/pages/CreateReport/pickLocation';
import PostReportPage from '@/components/pages/CreateReport/postReport';
import { View } from 'react-native';
import { LatLng } from 'react-native-maps';
import { Report } from '@/types';

export default function CreateReport() {
  const [pageIndex, setPageIndex] = useState(1);
  const [report, setReport] = useState<Report>({
    id: 0,
    latitude: 0,
    longitude: 0,
    address: '',
    title: '',
    description: '',
    isSOS: false,
    isVerified: false,
    date: new Date(),
  });

  const handleLocationSelect = (location: LatLng) => {
    console.log('Selected Location:', location);
    setReport((prevReport) => ({ ...prevReport, latitude: location.latitude, longitude: location.longitude }));
    setPageIndex(2);
  };

  const handleReportSubmit = (report: Report) => {
    console.log('Final Report:', report);
  };

  useEffect(() => {
    console.log('Report state updated:', report);
  }, [report]);

  return (
    <View className='bg-black h-full w-full h-full'>
      {pageIndex === 1 && <PickLocationPage onLocationSelect={handleLocationSelect} />}
      {pageIndex === 2 && <PostReportPage onSubmitReport={handleReportSubmit} report={report} setReport={setReport} />}
    </View>
  );
}