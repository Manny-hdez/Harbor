import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const RedCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const containerWidth = screenWidth - 20; // matches mx-5

  const CardContent = () => (
    <LinearGradient
      colors={['white', 'transparent']}
      locations={[0, 0.9, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        width: containerWidth,
        padding: 1,
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          backgroundColor: '#D32F2F',
          paddingHorizontal: 32,
          paddingVertical: 20,
          borderRadius: 11,
          width: '100%',
        }}
      >
        <Text className="mt-2 text-white font-bold text-2xl">
          Red Card
        </Text>
        <Text className="text-white text-sm">
          Assert your rights without speaking.
        </Text>
      </View>
    </LinearGradient>
  );

  return (
    <>
      {/* The pressable “preview” card */}
      <Pressable onPress={() => setModalVisible(true)} className="mx-5">
        <CardContent />
      </Pressable>

      {/* The pop‑up modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        {/* tapping the overlay closes it */}
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
            }}
          >
            {/* prevent taps inside the card from closing */}
            <Pressable onPress={() => {}} style={{ width: '100%', height: '100%'}}>

            <LinearGradient
                colors={['#D32F2F', '#551212']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
            >
              <View className='flex mt-28 items-center'>
                <Text className='text-white text-4xl font-bold mb-8'>Red Card</Text>
              </View>


                <Text className="text-white mx-5 text-lg">
                    You have constitutional rights:
                </Text>

                <View className="my-7 mx-6">
                    <Text style={{ fontSize: 16, lineHeight: 24, color: "#FFFFFF" }}>
                        {'\u2022'}{' '}
                        <Text className='font-bold'>
                        DO NOT OPEN THE DOOR
                        </Text>{' '}
                        if an immigration agent is knocking on the door. {'\n'}
                        {'\u2022'}{' '}
                        <Text className='font-bold'>
                        DO NOT ANSWER ANY QUESTIONS
                        </Text>{' '}
                        from an immigration agent if they try to talk to you. You have the right to remain silent. {'\n'}
                        {'\u2022'}{' '}
                        <Text className='font-bold'>
                        DO NOT SIGN ANYTHING
                        </Text>{' '}
                        without first speaking to a lawyer. You have the right to speak with a lawyer.

                        {'\u2022'}If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.{'\n'}

                        {'\u2022'}I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.{'\n'}
                    </Text>

                    <Text className='text-lg color-white'>
                        I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door. 
                    </Text>

                    <Text className='text-lg color-white mt-4 mb-8'>
                    I do not give you permission to search any of my belongings based on my 4th Amendment rights. I choose to exercise my constitutional rights. These cards are available to citizens and noncitizens alike.
                    </Text>
                </View>

                {/* Exit button */}
                <Pressable
                onPress={() => setModalVisible(false)}
                className="mt-4"
                >
                <Text className="text-white text-center text-xl">
                    Exit
                </Text>
                </Pressable>
            </LinearGradient>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};
