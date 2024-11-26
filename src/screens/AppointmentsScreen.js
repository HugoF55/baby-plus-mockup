import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Text,
  Card,
  Button,
  FAB,
  Portal,
  Modal,
  TextInput,
  IconButton,
} from 'react-native-paper';
import { db } from '../config/firebase';
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppointmentsScreen = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    doctorName: '',
    specialization: '',
    date: '',
    time: '',
    location: '',
    notes: '',
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const q = query(
        collection(db, 'appointments'),
        where('userId', '==', user.uid),
        orderBy('date', 'asc')
      );
      const querySnapshot = await getDocs(q);
      const appointmentsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(appointmentsList);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  const handleAddAppointment = async () => {
    try {
      setLoading(true);
      await addDoc(collection(db, 'appointments'), {
        ...formData,
        userId: user.uid,
        createdAt: new Date().toISOString(),
      });
      setVisible(false);
      setFormData({
        doctorName: '',
        specialization: '',
        date: '',
        time: '',
        location: '',
        notes: '',
      });
      fetchAppointments();
      Alert.alert('Success', 'Appointment added successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to add appointment');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await deleteDoc(doc(db, 'appointments', id));
      fetchAppointments();
      Alert.alert('Success', 'Appointment deleted successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete appointment');
    }
  };

  const renderAppointment = (appointment) => (
    <Card style={styles.card} key={appointment.id}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.doctorName}>{appointment.doctorName}</Text>
            <Text style={styles.specialization}>{appointment.specialization}</Text>
          </View>
          <IconButton
            icon="delete"
            size={24}
            onPress={() => handleDeleteAppointment(appointment.id)}
          />
        </View>
        <View style={styles.appointmentDetails}>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="calendar" size={20} color="#666" />
            <Text style={styles.detailText}>{appointment.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="clock" size={20} color="#666" />
            <Text style={styles.detailText}>{appointment.time}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="map-marker" size={20} color="#666" />
            <Text style={styles.detailText}>{appointment.location}</Text>
          </View>
        </View>
        {appointment.notes && (
          <View style={styles.notes}>
            <Text style={styles.notesLabel}>Notes:</Text>
            <Text style={styles.notesText}>{appointment.notes}</Text>
          </View>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {appointments.map(renderAppointment)}
      </ScrollView>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={styles.modal}
        >
          <ScrollView>
            <Text style={styles.modalTitle}>Add New Appointment</Text>
            <TextInput
              label="Doctor's Name"
              value={formData.doctorName}
              onChangeText={(text) =>
                setFormData({ ...formData, doctorName: text })
              }
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Specialization"
              value={formData.specialization}
              onChangeText={(text) =>
                setFormData({ ...formData, specialization: text })
              }
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Date"
              value={formData.date}
              onChangeText={(text) => setFormData({ ...formData, date: text })}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Time"
              value={formData.time}
              onChangeText={(text) => setFormData({ ...formData, time: text })}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Location"
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Notes"
              value={formData.notes}
              onChangeText={(text) => setFormData({ ...formData, notes: text })}
              mode="outlined"
              style={styles.input}
              multiline
              numberOfLines={3}
            />
            <Button
              mode="contained"
              onPress={handleAddAppointment}
              loading={loading}
              style={styles.button}
            >
              Add Appointment
            </Button>
          </ScrollView>
        </Modal>
      </Portal>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => setVisible(true)}
        color="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  specialization: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  appointmentDetails: {
    marginTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  notes: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  notesLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  notesText: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#7e22ce',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#7e22ce',
  },
});

export default AppointmentsScreen;
