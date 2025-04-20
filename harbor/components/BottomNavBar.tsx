import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import MapIcon from '@/assets/images/navbarIcons/mapIcon';
import ShieldIcon from '@/assets/images/navbarIcons/shieldIcon';
import SpeechIcon from '@/assets/images/navbarIcons/speechIcon';

interface BottomNavBarProps {
  currentRoute?: string;
}

export function BottomNavBar({ currentRoute = 'map' }: BottomNavBarProps) {
  const navigateTo = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.outerContainer}>
      {/* SOS Button positioned above the navbar */}
      <View style={styles.sosContainer}>
        <TouchableOpacity style={styles.sosButton} onPress={() => navigateTo('/sos')}>
          <View style={styles.sosIconContainer}>
            <SpeechIcon/>
          </View>
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </View>
      
      {/* Main navigation bar */}
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigateTo('/(tabs)/map')}
        >
          <View style={[styles.iconContainer, currentRoute === 'map' ? styles.activeIcon : styles.inactiveIcon]}>
            <MapIcon/>
          </View>
          <Text style={styles.navText}>Map</Text>
        </TouchableOpacity>

        {/* Empty middle space for SOS button alignment */}
        <View style={styles.middleSpace} />

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigateTo('/(tabs)/help')}
        >
          <View style={[styles.iconContainer, currentRoute === 'help' ? styles.activeIcon : styles.inactiveIcon]}>
            <ShieldIcon/>
          </View>
          <Text style={[styles.navText, currentRoute !== 'help' && styles.inactiveText]}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    position: 'relative',
  },
  container: {
    height: 90,
    backgroundColor: '#000000',
    borderTopWidth: 2,
    borderTopColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  middleSpace: {
    width: 50,
  },
  navItem: {
    width: 40,
    alignItems: 'center',
    gap: 4,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  activeIcon: {
    opacity: 1,
  },
  inactiveIcon: {
    opacity: 0.5,
  },
  inactiveText: {
    opacity: 0.5,
  },
  mapIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#F5F5F5', // Colors-Neutral-100
  },
  helpIcon: {
    width: 16,
    height: 20,
    backgroundColor: '#F5F5F5', // Colors-Neutral-100
  },
  navText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'System',
    textAlign: 'center',
  },
  sosContainer: {
    position: 'absolute',
    left: '50%',
    top: -34,
    marginLeft: -42, // Half of button width to center it
    zIndex: 10,
  },
  sosButton: {
    backgroundColor: '#DC2626', // red-600
    borderRadius: 90,
    padding: 14,
    alignItems: 'center',
    width: 84,
  },
  sosIconContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  sosIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#F5F5F5', // Colors-Neutral-100
  },
  sosText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'System',
    textAlign: 'center',
  },
}); 