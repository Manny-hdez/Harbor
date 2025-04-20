import { Report } from '@/types';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { PostReportHeader } from '@/components/pages/CreateReport/postReportHeader';
import CustomDatePicker from '@/components/ui/datePicker';
import IncidentTypeSelector from './pickIncident';
import VerificationCodeInput from '@/components/pages/CreateReport/orgCode';
import ChevronRight from '@/assets/images/chevronRight';
import { router } from 'expo-router';

interface PostReportProps {
  onSubmitReport: (report: Report) => void;
  report: Report;
  setIndex: (index: number) => void;
  setReport: React.Dispatch<React.SetStateAction<Report>>;
}

const PostReportPage: React.FC<PostReportProps> = ({
  onSubmitReport,
  report,
  setIndex,
  setReport,
}) => {
  const [page, setPage] = useState(1);

  const [description, setDescription] = useState(report.description || '');
  const [title, setTitle] = useState(report.title || '');
  const [selectedDate, setSelectedDate] = useState(report.date || new Date());
  const [isVerified, setIsVerified] = useState(report.isVerified || false)

  const handleIsVerifiedChange = (isVerified: boolean) => {
    setIsVerified(isVerified);
    setReport((prevReport) => ({ ...prevReport, isVerified: isVerified }));
  };

  const handleDateChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedDate(date);
      setReport((prevReport) => ({ ...prevReport, date: date }));
    }
  };

  const handleTypeChange = (text: string) => {
    setTitle(text);
    setReport((prevReport) => ({ ...prevReport, title: text }));
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
    setReport((prevReport) => ({ ...prevReport, description: text }));
  };

  const handleSubmit = () => {
      onSubmitReport(report);
      router.back
  };

  const handleBack = () => {
    router.back()
  };

  const goToVerification = () => {
    setPage(2);
  };

  return (
    <View className="bg-black h-full w-full pt-16">
      <PostReportHeader setPage={setPage} page={page} setIndex={setIndex} />
      
      <View className="p-4">
        {page === 1 && (
          <View>
            <View className="mb-4">
              <IncidentTypeSelector type={title} setType={handleTypeChange} />
            </View>

            <View className="mb-4">
              <Text className="text-white text-base font-semibold mb-2">Date & Time:</Text>
              <CustomDatePicker value={selectedDate} onChange={handleDateChange} mode="datetime" />
            </View>

            <View className="mb-4">
              <Text className="text-white text-base font-semibold mb-2">Description:</Text>
              <TextInput
                className="border bg-[#333333] rounded p-3 text-white w-full h-32"
                multiline
                value={description}
                onChangeText={handleDescriptionChange}
                placeholderTextColor="#888"
              />
            </View>
          </View>
        )};
        {page === 2 && (
            <VerificationCodeInput setIsVerified={handleIsVerifiedChange}/>
        )}
      </View>


      {page === 1 && (
        <View className="flex-1 justify-end items-center p-4 mb-8">
          <View className="flex-row justify-between w-full">
            <Pressable className="py-3 px-6" onPress={handleBack}>
              <Text className="text-white text-lg">Cancel</Text>
            </Pressable>
            <Pressable
              onPress={goToVerification}
              className={``}
            >
              <ChevronRight/>
            </Pressable>
          </View>
        </View>
      )}
      {page === 2 && (
        <View className="flex-1 justify-end items-center p-4 mb-8">
          <View className="flex-row justify-between w-full">
            <Pressable className="py-3 px-6" onPress={handleSubmit}>
              <Text className="text-white text-lg">Skip</Text>
            </Pressable>
            <Pressable
              onPress={handleSubmit}
              className={`bg-white py-3 px-12 ${!isVerified && 'opacity-50'}`}
              disabled={!isVerified}
            >
              <Text className="text-lg font-semibold">Post</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default PostReportPage;