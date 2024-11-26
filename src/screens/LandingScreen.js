import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.mainContainer}>
        {/* iPhone Frame Container */}
        <View style={styles.frameContainer}>
          {/* iPhone Frame Top Notch */}
          <View style={styles.notch} />
          
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

            {/* iPhone Home Indicator */}
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
  },
  mainContainer: {
    position: 'relative',
    width: Platform.OS === 'web' ? 375 : '100%',
    height: Platform.OS === 'web' ? 812 : '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: Platform.OS === 'web' ? 44 : 0,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: Platform.OS === 'web' ? '0 8px 40px rgba(0, 0, 0, 0.12)' : 'none',
  },
  notch: {
    width: 219,
    height: 30,
    backgroundColor: '#000000',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'web' ? 60 : 20,
  },
  illustration: {
    width: 300,
    height: 300,
    marginBottom: 32,
    objectFit: 'contain',
    marginTop: -16,
  },
  textContent: {
    alignItems: 'center',
    marginBottom: 32,
    maxWidth: 343,
    width: '100%',
  },
  title: {
    fontSize: 32,
    lineHeight: '38px',
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: Platform.OS === 'web' ? 'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' : undefined,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: '400',
    color: '#4D4D4D',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' : undefined,
  },
  buttons: {
    width: '100%',
    maxWidth: 343,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  button: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    marginBottom: 12,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' : undefined,
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
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' : undefined,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
    position: 'absolute',
    bottom: Platform.OS === 'web' ? 8 : 0,
    alignSelf: 'center',
    opacity: Platform.OS === 'web' ? 0.4 : 0,
  },
});

export default LandingScreen;
