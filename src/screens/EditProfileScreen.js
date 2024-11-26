import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../context/AuthContext';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const EditProfileScreen = ({ navigation }) => {
  const { user, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dueDate: user?.dueDate || '',
    bloodType: user?.bloodType || '',
    emergencyContact: user?.emergencyContact || '',
  });
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) return null;

    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const filename = `profile_${user.uid}_${Date.now()}`;
      const storageRef = ref(storage, `profile_images/${filename}`);
      
      await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const photoURL = await uploadImage();
      
      const updatedData = {
        ...formData,
        ...(photoURL && { photoURL }),
        updatedAt: new Date().toISOString(),
      };

      await updateUserProfile(updatedData);
      Alert.alert('Success', 'Profile updated successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Avatar.Image
            size={120}
            source={
              image
                ? { uri: image }
                : user?.photoURL
                ? { uri: user.photoURL }
                : require('../assets/images/profile.png')
            }
          />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <TextInput
          label="Full Name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          disabled
        />

        <TextInput
          label="Phone Number"
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
          mode="outlined"
          style={styles.input}
          keyboardType="phone-pad"
        />

        <TextInput
          label="Due Date"
          value={formData.dueDate}
          onChangeText={(text) => setFormData({ ...formData, dueDate: text })}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Blood Type"
          value={formData.bloodType}
          onChangeText={(text) => setFormData({ ...formData, bloodType: text })}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Emergency Contact"
          value={formData.emergencyContact}
          onChangeText={(text) =>
            setFormData({ ...formData, emergencyContact: text })
          }
          mode="outlined"
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleSubmit}
          loading={loading}
          style={styles.button}
        >
          Save Changes
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  avatarContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  form: {
    padding: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#7e22ce',
  },
});

export default EditProfileScreen;
