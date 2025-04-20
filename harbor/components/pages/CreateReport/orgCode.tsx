import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface VerificationCodeInputProps {
    setIsVerified: (isVerified: boolean) => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({ setIsVerified }) => {
  const [enteredCode, setEnteredCode] = useState('');

  useEffect(() => {
    if (true && enteredCode.length == 5) {
      setIsVerified(true)
    } else {
      setIsVerified(false)
    }
  }, [enteredCode]);

  const handleInputChange = (text: string) => {
    setEnteredCode(text);
  };

  return (
    <View className="flex-col items-start w-full">
      <Text className="text-white text-lg font-semibold mb-2">Organization code</Text>
      <Text className="text-gray-400 mb-4">Enter your organization-specific code to mark this report as verified.</Text>
      <TextInput
        className="w-full border border-gray-600 rounded-md text-white text-center text-xl py-3"
        keyboardType="number-pad"
        maxLength={5}
        value={enteredCode}
        onChangeText={handleInputChange}
        secureTextEntry={true} 
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    letterSpacing: 10, // To space out the numbers like in the image
  },
});

export default VerificationCodeInput;