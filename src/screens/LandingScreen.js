import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.phoneContainer}>
        {/* iPhone Frame */}
        <View style={styles.iphoneFrame}>
          {/* Notch */}
          <View style={styles.notchContainer}>
            <View style={styles.notch}>
              <View style={styles.camera} />
              <View style={styles.speaker} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Image
              source={require('../assets/images/landing-illustration.png')}
              style={styles.illustration}
              resizeMode="contain"
            />

            <View style={styles.textContent}>
              <Text style={styles.title}>Welcome to Baby+</Text>
              <Text style={styles.subtitle}>
                Your personal pregnancy companion. Track your journey, learn from experts, and connect with our AI assistant.
              </Text>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
              >
                <LinearGradient
                  colors={['#7B4BFF', '#B927AE']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradient}
                >
                  <Text style={styles.buttonText}>Get Started</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.loginButton]}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.loginButtonText}>I already have an account</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Home Indicator */}
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneContainer: {
    width: '100%',
    height: '100%',
    maxWidth: 430,
    maxHeight: 932,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iphoneFrame: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F9FA',
    borderRadius: 50,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 3,
    borderColor: '#333',
  },
  notchContainer: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  notch: {
    width: 150,
    height: '100%',
    backgroundColor: '#333',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  camera: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1a1a1a',
    marginRight: 10,
  },
  speaker: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  illustration: {
    width: width * 0.7,
    height: width * 0.7,
    marginBottom: 30,
  },
  textContent: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttons: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: '600',
    color: '#7B4BFF',
  },
  homeIndicator: {
    width: 140,
    height: 5,
    backgroundColor: '#333',
    borderRadius: 3,
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
  },
});

export default LandingScreen;
