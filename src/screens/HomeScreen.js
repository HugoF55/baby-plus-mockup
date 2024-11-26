import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_PADDING = 24;
const CARD_WIDTH = (width - (CARD_PADDING * 3)) / 2;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.userName}>Sarah Johnson</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="#333333" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        <View style={styles.pregnancyCard}>
          <LinearGradient
            colors={['#6B4EFF', '#9C27B0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.pregnancyGradient}
          >
            <View style={styles.pregnancyInfo}>
              <Text style={styles.weekText}>Week 12</Text>
              <Text style={styles.daysText}>3 days</Text>
              <Text style={styles.babySize}>Baby is the size of a lime</Text>
            </View>
            <Image 
              source={require('../assets/images/baby-size.png')}
              style={styles.babySizeImage}
            />
          </LinearGradient>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#E8F5E9', '#C8E6C9']}
                style={styles.actionIcon}
              >
                <MaterialCommunityIcons name="calendar-check" size={24} color="#4CAF50" />
              </LinearGradient>
              <Text style={styles.actionText}>Appointments</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#FFF3E0', '#FFE0B2']}
                style={styles.actionIcon}
              >
                <MaterialCommunityIcons name="food-apple" size={24} color="#FF9800" />
              </LinearGradient>
              <Text style={styles.actionText}>Diet Plan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#E3F2FD', '#BBDEFB']}
                style={styles.actionIcon}
              >
                <MaterialCommunityIcons name="yoga" size={24} color="#2196F3" />
              </LinearGradient>
              <Text style={styles.actionText}>Exercise</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#F3E5F5', '#E1BEE7']}
                style={styles.actionIcon}
              >
                <MaterialCommunityIcons name="pill" size={24} color="#9C27B0" />
              </LinearGradient>
              <Text style={styles.actionText}>Medicine</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tasks}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.tasksList}>
            <TouchableOpacity style={styles.taskItem}>
              <View style={styles.taskLeft}>
                <MaterialCommunityIcons 
                  name="checkbox-blank-circle-outline" 
                  size={24} 
                  color="#666666" 
                />
                <View style={styles.taskContent}>
                  <Text style={styles.taskTitle}>Take prenatal vitamins</Text>
                  <Text style={styles.taskTime}>8:00 AM</Text>
                </View>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={24} color="#666666" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.taskItem}>
              <View style={styles.taskLeft}>
                <MaterialCommunityIcons 
                  name="checkbox-blank-circle-outline" 
                  size={24} 
                  color="#666666" 
                />
                <View style={styles.taskContent}>
                  <Text style={styles.taskTitle}>Drink 8 glasses of water</Text>
                  <Text style={styles.taskTime}>All day</Text>
                </View>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={24} color="#666666" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.appointments}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.appointmentCard}>
            <View style={styles.appointmentLeft}>
              <LinearGradient
                colors={['#6B4EFF', '#9C27B0']}
                style={styles.doctorIcon}
              >
                <MaterialCommunityIcons name="doctor" size={24} color="#FFFFFF" />
              </LinearGradient>
              <View style={styles.appointmentInfo}>
                <Text style={styles.doctorName}>Dr. Sarah Wilson</Text>
                <Text style={styles.appointmentType}>Regular Checkup</Text>
                <Text style={styles.appointmentDate}>Tomorrow, 10:00 AM</Text>
              </View>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#666666" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  headerContent: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
  pregnancyCard: {
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  pregnancyGradient: {
    flexDirection: 'row',
    padding: 24,
  },
  pregnancyInfo: {
    flex: 1,
  },
  weekText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  daysText: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 8,
  },
  babySize: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  babySizeImage: {
    width: 80,
    height: 80,
  },
  quickActions: {
    padding: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B4EFF',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
    marginTop: 16,
  },
  actionCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    margin: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  tasks: {
    padding: 24,
  },
  tasksList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskContent: {
    marginLeft: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 4,
  },
  taskTime: {
    fontSize: 14,
    color: '#666666',
  },
  appointments: {
    padding: 24,
    paddingBottom: 32,
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  appointmentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  appointmentInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  appointmentType: {
    fontSize: 14,
    color: '#6B4EFF',
    marginBottom: 4,
  },
  appointmentDate: {
    fontSize: 14,
    color: '#666666',
  },
});

export default HomeScreen;
