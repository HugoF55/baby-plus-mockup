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
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CoursesScreen = () => {
  const courses = [
    {
      title: 'First Trimester Guide',
      description: 'Essential information for weeks 1-12',
      image: require('../assets/images/first-trimester.jpg'),
      lessons: 8,
      duration: '2h 30m',
    },
    {
      title: 'Nutrition Essentials',
      description: 'Healthy eating during pregnancy',
      image: require('../assets/images/nutrition.jpg'),
      lessons: 6,
      duration: '1h 45m',
    },
    {
      title: 'Prenatal Exercise',
      description: 'Safe workouts for expecting mothers',
      image: require('../assets/images/exercise.jpg'),
      lessons: 10,
      duration: '3h 15m',
    },
    {
      title: 'Birth Preparation',
      description: 'Get ready for labor and delivery',
      image: require('../assets/images/birth.jpg'),
      lessons: 12,
      duration: '4h 00m',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Courses</Text>
          <Text style={styles.subtitle}>Learn from experts</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="filter-variant" size={24} color="#333333" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <MaterialCommunityIcons name="magnify" size={24} color="#666666" />
            <Text style={styles.searchPlaceholder}>Search courses...</Text>
          </View>
        </View>

        <View style={styles.categories}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContent}
          >
            <TouchableOpacity style={[styles.categoryButton, styles.activeCategoryButton]}>
              <Text style={[styles.categoryText, styles.activeCategoryText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Trimester 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Trimester 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Trimester 3</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.coursesList}>
          {courses.map((course, index) => (
            <TouchableOpacity key={index} style={styles.courseCard}>
              <Image source={course.image} style={styles.courseImage} />
              <View style={styles.courseContent}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>{course.description}</Text>
                <View style={styles.courseMetrics}>
                  <View style={styles.metric}>
                    <MaterialCommunityIcons name="book-open-variant" size={16} color="#666666" />
                    <Text style={styles.metricText}>{course.lessons} lessons</Text>
                  </View>
                  <View style={styles.metric}>
                    <MaterialCommunityIcons name="clock-outline" size={16} color="#666666" />
                    <Text style={styles.metricText}>{course.duration}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 20,
    paddingTop: 0,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
  },
  searchPlaceholder: {
    marginLeft: 12,
    fontSize: 16,
    color: '#666666',
  },
  categories: {
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
  },
  activeCategoryButton: {
    backgroundColor: '#6B4EFF',
  },
  categoryText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  coursesList: {
    padding: 20,
    paddingTop: 0,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  courseImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  courseContent: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  courseMetrics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metricText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
});

export default CoursesScreen;
