import React, { useCallback, useRef, useState, useEffect } from 'react';
import MapViewComponent from '@/components/mapView';
import { View, Text } from 'react-native';
import { Report } from '@/types';
import Header from '@/components/homeHeader';
import SheetView from '@/components/ui/sheetView';
import SheetHeader from '@/components/sheetHeader';
import ReportFeed from '@/components/ReportFeed';
import { getAllReports } from '@/lib/api'; // Assuming your getAllReports function is in this file

export default function HomeScreen() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const fetchedReports = await getAllReports();
        if (fetchedReports) {
          setReports(fetchedReports);
        } else {
          setError('Failed to fetch reports.');
        }
      } catch (err: any) {
        console.error("Error fetching reports:", err);
        setError('An unexpected error occurred while fetching reports.');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  if (loading) {
    return (
      <View className='bg-black h-full w-full pt-16 items-center justify-center'>
        {/* You can add a loading indicator here */}
        <Header />
        <Text className="text-white text-lg">Loading reports...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className='bg-black h-full w-full pt-16 items-center justify-center'>
        <Header />
        <Text className="text-red-500 text-lg">Error: {error}</Text>
      </View>
    );
  }

  return (
    <View className='bg-black h-full w-full pt-16'>
      <Header />
      <View className='h-full'>
        <MapViewComponent markers={reports} />
        <SheetView>
          <View>
            <SheetHeader />
            <ReportFeed reports={reports} />
          </View>
        </SheetView>
      </View>
    </View>
  );
}