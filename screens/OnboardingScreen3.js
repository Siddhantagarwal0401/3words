import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen3 = ({ navigation }) => {
  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('@onboarding_completed', 'true');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error saving onboarding status:', error);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Distraction-free Learning</Text>
        <Text style={styles.subtitle}>No app to open, just notifications</Text>
        
        <View style={styles.featureContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🔔</Text>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Push Notifications</Text>
              <Text style={styles.featureDescription}>Receive new words directly on your device</Text>
            </View>
          </View>
          
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📚</Text>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>SAT-level Vocabulary</Text>
              <Text style={styles.featureDescription}>Words hand-picked to boost your SAT score</Text>
            </View>
          </View>
          
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🧠</Text>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Effortless Learning</Text>
              <Text style={styles.featureDescription}>Just 3 words daily for maximum retention</Text>
            </View>
          </View>
        </View>
        
        <Text style={styles.description}>
          Word3 is designed to be minimalist. You'll receive vocabulary through notifications, without needing to open the app every day.
        </Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate('Onboarding2')}
        >
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={completeOnboarding}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  featureContainer: {
    width: '100%',
    marginVertical: 30,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 15,
    width: 50,
    textAlign: 'center',
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    lineHeight: 24,
  },
  footer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  secondaryButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

OnboardingScreen3.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default OnboardingScreen3;
