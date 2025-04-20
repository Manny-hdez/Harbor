import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  value?: Date;
  onChange: (event: any, date?: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
  display?: 'default' | 'spinner' | 'calendar' | 'clock';
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  value: initialValue,
  onChange,
  mode = 'date',
  display = 'default',
}) => {
  const [date, setDate] = useState(initialValue || new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowPicker(Platform.OS === 'ios'); // Hide picker on iOS after selection
    if (selectedDate) {
      setDate(selectedDate);
      onChange(event, selectedDate);
    } else {
      onChange(event, date); // Send the current date if selection is cancelled
    }
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  return (
    <View className='flex justify-center items-start'>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display={display}
          themeVariant={'dark'}
          onChange={handleDateChange}
        />
    </View>
  );
};


export default CustomDatePicker;