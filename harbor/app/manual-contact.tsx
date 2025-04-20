import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';

interface Contact {
  name: string;
  phone: string;
}

export default function ManualContact() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([{ name: '', phone: '' }]);
  const [currentContact, setCurrentContact] = useState<Contact>({ name: '', phone: '' });

  const addContact = () => {
    if (!currentContact.name || !currentContact.phone) {
      Alert.alert('Please enter both name and phone number');
      return;
    }
    
    setContacts([...contacts, currentContact]);
    setCurrentContact({ name: '', phone: '' });
  };

  const saveContacts = () => {
    // In a real app, you would save these contacts to AsyncStorage or a database
    // For now, we'll just log them and navigate to the main app
    console.log('Saving contacts:', contacts.slice(1)); // Skip the first empty contact
    router.push("/sos-message");
  };

  const goBackToSOS = () => {
    router.back();
  };

  const skipToMainApp = () => {
    router.push("/(tabs)");
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-1 relative overflow-hidden bg-red-800">
        {/* Mock status bar content */}
        <SafeAreaView className="w-full px-2.5 flex-row justify-between items-center">
           
        </SafeAreaView>

        {/* Background gradient circles */}
        <View className="absolute -left-[233] -top-[16]">
          <View className="w-[570px] h-[570px] left-0 top-0 absolute opacity-10 bg-gradient-to-br from-transparent to-red-600 rounded-full" />
          <View className="w-[570px] h-[570px] left-[771] top-[352] absolute opacity-10 bg-gradient-to-br from-transparent to-red-600 rounded-full" />
        </View>

        {/* Back button */}
        <TouchableOpacity 
          className="absolute left-[40] top-[78] w-5 h-5 bg-red-400"
          onPress={goBackToSOS}
        />

        {/* Title */}
        <Text className="left-[34] top-[130] absolute text-white text-4xl font-bold">
          Add Contacts
        </Text>

        {/* Form section */}
        <ScrollView className="w-full mt-[180] px-8">
          <View className="mb-6">
            <Text className="text-white text-lg mb-2">Name</Text>
            <TextInput
              className="w-full bg-white p-3 rounded-md text-base"
              placeholder="Contact name"
              value={currentContact.name}
              onChangeText={(text) => setCurrentContact({ ...currentContact, name: text })}
            />
          </View>

          <View className="mb-6">
            <Text className="text-white text-lg mb-2">Phone Number</Text>
            <TextInput
              className="w-full bg-white p-3 rounded-md text-base"
              placeholder="+1 (555) 123-4567"
              keyboardType="phone-pad"
              value={currentContact.phone}
              onChangeText={(text) => setCurrentContact({ ...currentContact, phone: text })}
            />
          </View>

          <TouchableOpacity 
            className="w-full p-2.5 mb-8 bg-red-500 border border-white flex-row justify-center items-center rounded-md"
            onPress={addContact}
          >
            <Text className="text-white text-base">Add Contact</Text>
          </TouchableOpacity>

          {/* List of added contacts */}
          {contacts.length > 1 && (
            <View className="mb-8">
              <Text className="text-white text-xl mb-4">Added Contacts</Text>
              {contacts.slice(1).map((contact, index) => (
                <View key={index} className="bg-red-700 p-4 mb-2 rounded-md">
                  <Text className="text-white text-base">{contact.name}</Text>
                  <Text className="text-red-200 text-sm">{contact.phone}</Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        {/* Save Contacts Button */}
        <View className="absolute bottom-0 w-full p-4 bg-red-800">
          <TouchableOpacity 
            className="w-full p-3 bg-white flex-row justify-center items-center rounded-md"
            onPress={saveContacts}
          >
            <Text className="text-red-800 text-base font-medium">Save Contacts</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Stack.Screen options={{ 
        headerShown: false,
        animation: 'slide_from_right'
      }} />
    </View>
  );
} 