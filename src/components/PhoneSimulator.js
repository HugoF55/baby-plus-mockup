import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const PhoneSimulator = ({ children }) => {
  if (Platform.OS !== 'web') {
    return children;
  }

  return (
    <View style={styles.container}>
      <View style={styles.phoneFrame}>
        {/* Dynamic Island */}
        <View style={styles.dynamicIsland} />
        
        {/* Left Side Buttons */}
        <View style={styles.volumeButtons}>
          <View style={styles.volumeUp} />
          <View style={styles.volumeDown} />
        </View>
        <View style={styles.silentSwitch} />
        
        {/* Right Side Button */}
        <View style={styles.powerButton} />
        
        {/* Inner Screen Content */}
        <View style={styles.innerFrame}>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  phoneFrame: {
    width: 375,
    height: 812,
    backgroundColor: '#1a1a1a',
    borderRadius: 50,
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
  },
  dynamicIsland: {
    width: 126,
    height: 37.5,
    backgroundColor: '#000000',
    position: 'absolute',
    top: 12,
    left: '50%',
    transform: [{ translateX: -63 }],
    borderRadius: 20,
    zIndex: 1000,
  },
  volumeButtons: {
    position: 'absolute',
    left: -2,
    top: 120,
    zIndex: 1000,
  },
  volumeUp: {
    width: 4,
    height: 32,
    backgroundColor: '#1a1a1a',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: 20,
  },
  volumeDown: {
    width: 4,
    height: 32,
    backgroundColor: '#1a1a1a',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  silentSwitch: {
    position: 'absolute',
    left: -2,
    top: 70,
    width: 4,
    height: 20,
    backgroundColor: '#1a1a1a',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 1000,
  },
  powerButton: {
    position: 'absolute',
    right: -2,
    top: 120,
    width: 4,
    height: 32,
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    zIndex: 1000,
  },
  innerFrame: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 12,
    borderRadius: 40,
    overflow: 'hidden',
  },
});

export default PhoneSimulator;
