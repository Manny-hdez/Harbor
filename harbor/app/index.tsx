import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  const handleGetStarted = () => {
    router.replace('/(tabs)/map');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Language selector */}
      <View style={styles.languageSelector}>
        <Text style={styles.languageText}>EN 🇺🇸</Text>
        <View style={styles.languageIcon}>
          <View style={styles.languageIconInner} />
        </View>
      </View>
      
      {/* Center content */}
      <View style={styles.centerContent}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/Harbor.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Image 
            source={require('../assets/images/Vector.png')} 
            style={styles.vectorImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.infoText}>Stay protected & know your rights</Text>
      </View>

      {/* Get Started button */}
      <TouchableOpacity 
        style={styles.getStartedButton}
        onPress={handleGetStarted}
      >
        <Text style={styles.getStartedText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#DC2626', // Red background
  },
  languageSelector: {
    position: 'absolute',
    top: 72,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  languageText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'System',
  },
  languageIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageIconInner: {
    width: 14,
    height: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoContainer: {
    position: 'relative',
    width: 288,
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 288,
    height: 100,
  },
  vectorImage: {
    position: 'absolute',
    width: 50,
    height: 50,
    // Adjust these values to position the Vector between "b" and "r"
    top: '44%',
    left: '73%',
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'System',
    textAlign: 'center',
  },
  getStartedButton: {
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    width: 320,
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'System',
  },
}); 