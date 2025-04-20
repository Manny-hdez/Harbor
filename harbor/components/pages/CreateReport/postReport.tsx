import { Report } from '@/types';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { LatLng } from 'react-native-maps';

interface PostReportProps {
  onSubmitReport: (report: Report) => void;
  report: Report;
  setReport: React.Dispatch<React.SetStateAction<Report>>;
}

const PostReportPage: React.FC<PostReportProps> = ({
  onSubmitReport,
  report,
  setReport,
}) => {
  const [description, setDescription] = useState(report.description || '');

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
    setReport((prevReport) => ({ ...prevReport, description: text }));
  };

  const handleSubmit = () => {
    if (onSubmitReport) {
      onSubmitReport(report);
    }
  };

  return (
    <View className="bg-black h-full w-full pt-16">
      <Text className="text-xl text-white font-bold mb-4">Create Report</Text>

      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Location:</Text>
        <Text>Latitude: {report.latitude?.toFixed(6) || 'Not Selected'}</Text>
        <Text>Longitude: {report.longitude?.toFixed(6) || 'Not Selected'}</Text>
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Description:</Text>
        <TextInput
          className="border border-gray-300 rounded p-2"
          multiline
          value={description}
          onChangeText={handleDescriptionChange}
          placeholder="Describe the incident..."
        />
      </View>

      <Button title="Submit Report" onPress={handleSubmit} disabled={!report.latitude} />
      {!report.latitude && (
        <Text className="text-red-500 mt-2">Please select a location first.</Text>
      )}
    </View>
  );
};

export default PostReportPage;