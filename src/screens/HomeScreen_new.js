import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const weekNumber = 12;
  const progressPercent = (weekNumber / 40) * 100;

  const quickActions = [
    { icon: 'calendar-check', title: 'Appointments', screen: 'Appointments' },
    { icon: 'food-apple', title: 'Diet Plan', screen: 'Nutrition' },
    { icon: 'yoga', title: 'Exercise', screen: 'Exercise' },
    { icon: 'pill', title: 'Medication', screen: 'Medication' },
  ];

  const todaysTasks = [
    { title: 'Take prenatal vitamins', time: '8:00 AM', completed: true },
    { title: 'Drink 8 glasses of water', time: 'All day', completed: false },
    { title: '15 min meditation', time: '6:00 PM', completed: false },
  ];

  const appointments = [
    {
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Obstetrician',
      date: 'Tomorrow, 10:00 AM',
      type: 'Checkup',
    },
    {
      doctor: 'Dr. Michael Brown',
      specialty: 'Ultrasound',
      date: 'Next Week, 2:00 PM',
      type: 'Scan',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#FF512F', '#DD2476']}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.welcomeText}>Hello, Sarah!</Text>
          <View style={styles.weekContainer}>
            <Text style={styles.weekText}>Week {weekNumber}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${progressPercent}%` }]} />
            </View>
            <Text style={styles.weekSubtext}>28 weeks to go</Text>
          </View>
        </LinearGradient>

        <View style={styles.quickActionsContainer}>
          {quickActions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionButton}
              onPress={() => navigation.navigate(action.screen)}
            >
              <View style={styles.actionIcon}>
                <MaterialCommunityIcons name={action.icon} size={24} color="#DD2476" />
              </View>
              <Text style={styles.actionText}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          {todaysTasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <View style={styles.taskLeft}>
                <MaterialCommunityIcons
                  name={task.completed ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
                  size={24}
                  color={task.completed ? '#4CAF50' : '#666'}
                />
                <View style={styles.taskTexts}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <Text style={styles.taskTime}>{task.time}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {appointments.map((appointment, index) => (
            <View key={index} style={styles.appointmentCard}>
              <View style={styles.appointmentLeft}>
                <MaterialCommunityIcons name="doctor" size={24} color="#DD2476" />
                <View style={styles.appointmentInfo}>
                  <Text style={styles.doctorName}>{appointment.doctor}</Text>
                  <Text style={styles.appointmentType}>{appointment.type}</Text>
                  <Text style={styles.appointmentDate}>{appointment.date}</Text>
                </View>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
            </View>
          ))}
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
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  weekContainer: {
    alignItems: 'center',
  },
  weekText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    marginBottom: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  weekSubtext: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
  },
  actionButton: {
    width: (width - 60) / 2,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionIcon: {
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTexts: {
    marginLeft: 15,
  },
  taskTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  taskTime: {
    fontSize: 14,
    color: '#666',
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  appointmentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appointmentInfo: {
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  appointmentType: {
    fontSize: 14,
    color: '#DD2476',
    marginBottom: 4,
  },
  appointmentDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
