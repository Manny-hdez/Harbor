import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, FlatList, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';

// Import contacts module with try/catch
let Contacts: any = null;
try {
  // This will fail silently if the module doesn't exist
  Contacts = require('expo-contacts');
} catch (e) {
  console.log('expo-contacts not available, using fallback data');
}

// Sample data to use as fallback if contacts module is unavailable
const SAMPLE_CONTACTS = [
  { id: '1', name: 'John Doe', phoneNumbers: [{ id: '1-1', label: 'mobile', number: '(555) 123-4567' }] },
  { id: '2', name: 'Jane Smith', phoneNumbers: [{ id: '2-1', label: 'mobile', number: '(555) 987-6543' }] },
  { id: '3', name: 'Robert Johnson', phoneNumbers: [{ id: '3-1', label: 'mobile', number: '(555) 456-7890' }] },
  { id: '4', name: 'Sarah Williams', phoneNumbers: [{ id: '4-1', label: 'mobile', number: '(555) 567-8901' }] },
  { id: '5', name: 'Michael Brown', phoneNumbers: [{ id: '5-1', label: 'mobile', number: '(555) 345-6789' }] },
  { id: '6', name: 'Emily Davis', phoneNumbers: [{ id: '6-1', label: 'mobile', number: '(555) 234-5678' }] },
  { id: '7', name: 'David Miller', phoneNumbers: [{ id: '7-1', label: 'mobile', number: '(555) 876-5432' }] },
  { id: '8', name: 'Jennifer Wilson', phoneNumbers: [{ id: '8-1', label: 'mobile', number: '(555) 765-4321' }] }
];

interface ContactType {
  id: string;
  name: string;
  phoneNumbers?: Array<{
    id: string;
    label: string;
    number: string;
  }>;
}

export default function ImportContacts() {
  const router = useRouter();
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [selectedContacts, setSelectedContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    // Function to fetch contacts
    const fetchContacts = async () => {
      try {
        // Check if Contacts module is available
        if (Contacts) {
          try {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
              const { data } = await Contacts.getContactsAsync({
                fields: [
                  Contacts.Fields.ID,
                  Contacts.Fields.Name,
                  Contacts.Fields.FirstName,
                  Contacts.Fields.LastName,
                  Contacts.Fields.PhoneNumbers,
                ],
                sort: Contacts.SortTypes.FirstName,
              });
              
              // Filter contacts with phone numbers
              const contactsWithPhones = data.filter(
                (contact: { phoneNumbers?: Array<any> }) => contact.phoneNumbers && contact.phoneNumbers.length > 0
              );
              
              // Map to our interface ensuring id is always a string
              const mappedContacts: ContactType[] = contactsWithPhones
                .filter((contact: { id?: any }) => contact.id !== undefined)
                .map((contact: { 
                  id?: any, 
                  name?: string, 
                  firstName?: string, 
                  lastName?: string, 
                  phoneNumbers?: Array<{ 
                    id?: any, 
                    label?: string, 
                    number?: string 
                  }> 
                }) => ({
                  id: contact.id || String(Math.random()),
                  name: contact.name || `${contact.firstName || ''} ${contact.lastName || ''}`.trim() || 'Unknown',
                  phoneNumbers: contact.phoneNumbers?.map((phone) => ({
                    id: phone.id || String(Math.random()),
                    label: phone.label || '',
                    number: phone.number || ''
                  }))
                }));
              
              setContacts(mappedContacts);
            } else {
              setPermissionDenied(true);
              throw new Error('Permission denied');
            }
          } catch (error) {
            console.log("Error using contacts:", error);
            setContacts(SAMPLE_CONTACTS);
            setIsUsingFallback(true);
          }
        } else {
          // Contacts module not available, use fallback
          console.log("Contacts module not available");
          setContacts(SAMPLE_CONTACTS);
          setIsUsingFallback(true);
        }
      } catch (error) {
        console.log("Error in contacts handling:", error);
        // Always fall back to sample data in case of any error
        setContacts(SAMPLE_CONTACTS);
        setIsUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const toggleSelectContact = (contact: ContactType) => {
    if (selectedContacts.some(c => c.id === contact.id)) {
      setSelectedContacts(selectedContacts.filter(c => c.id !== contact.id));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const saveContacts = () => {
    if (selectedContacts.length === 0) {
      Alert.alert("No Contacts Selected", "Please select at least one contact");
      return;
    }
    
    // In a real app, you would save these contacts to AsyncStorage or a database
    console.log('Saving selected contacts:', selectedContacts);
    router.push("/sos-message");
  };

  const goBackToSOS = () => {
    router.back();
  };

  const skipToMainApp = () => {
    router.push("/(tabs)");
  };

  const renderEmptyComponent = () => (
    <View className="flex-1 justify-center items-center py-12">
      {permissionDenied ? (
        <Text className="text-white text-center text-base">
          Please grant contact permissions to import your contacts.
        </Text>
      ) : (
        <Text className="text-white text-center text-base">
          No contacts found with phone numbers.
        </Text>
      )}
    </View>
  );

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-1 relative overflow-hidden bg-red-800">
        {/* Mock status bar content */}
        <SafeAreaView className="w-full px-2.5 flex-row justify-between items-center">
           
        </SafeAreaView>

        {/* Background gradient circles */}
        <View className="absolute -left-[233] -top-[16] z-0">
          <View className="w-[570px] h-[570px] left-0 top-0 absolute opacity-10 bg-gradient-to-br from-transparent to-red-600 rounded-full" />
          <View className="w-[570px] h-[570px] left-[771] top-[352] absolute opacity-10 bg-gradient-to-br from-transparent to-red-600 rounded-full" />
        </View>

        {/* Back button */}
        <TouchableOpacity 
          className="absolute left-[40] top-[78] w-5 h-5 bg-red-400 z-10"
          onPress={goBackToSOS}
        />

        {/* Title */}
        <Text className="left-[34] top-[130] absolute text-white text-4xl font-bold z-10">
          Import Contacts
        </Text>
        
        <Text className="left-[34] top-[185] absolute text-red-200 text-base w-[340] z-10">
          Select the contacts you want to add as emergency contacts
          {isUsingFallback && "\n(Using sample contacts)"}
        </Text>

        {/* Contacts List */}
        <View className="flex-1 mt-[230] px-8">
          {loading ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#fff" />
              <Text className="text-white mt-4 text-center">
                Loading your contacts...
              </Text>
            </View>
          ) : (
            <FlatList
              data={contacts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  className={`p-4 mb-2 rounded-md flex-row justify-between items-center ${
                    selectedContacts.some(c => c.id === item.id) ? 'bg-red-600' : 'bg-red-700'
                  }`}
                  onPress={() => toggleSelectContact(item)}
                >
                  <View className="flex-1">
                    <Text className="text-white text-base">{item.name}</Text>
                    {item.phoneNumbers && item.phoneNumbers.length > 0 && (
                      <Text className="text-red-200 text-sm">
                        {item.phoneNumbers[0].number}
                      </Text>
                    )}
                  </View>
                  <View className={`w-6 h-6 rounded-full border border-white ${
                    selectedContacts.some(c => c.id === item.id) ? 'bg-white' : 'bg-transparent'
                  }`} />
                </TouchableOpacity>
              )}
              ListEmptyComponent={renderEmptyComponent}
              contentContainerStyle={{ 
                paddingBottom: 100,
                flexGrow: contacts.length === 0 ? 1 : undefined
              }}
            />
          )}
        </View>

        {/* Save Contacts Button */}
        <View className="absolute bottom-0 w-full p-4 bg-red-800 z-10">
          <TouchableOpacity 
            className={`w-full p-3 flex-row justify-center items-center rounded-md ${
              selectedContacts.length > 0 ? 'bg-white' : 'bg-gray-300'
            }`}
            onPress={saveContacts}
            disabled={selectedContacts.length === 0}
          >
            <Text className={`text-red-800 text-base font-medium`}>
              Save {selectedContacts.length} {selectedContacts.length === 1 ? 'Contact' : 'Contacts'}
            </Text>
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