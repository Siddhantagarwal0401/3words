import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>3 New Words Daily</Text>
        <Text style={styles.subtitle}>Just the right amount to remember</Text>
        
        <View style={styles.imageContainer}>
          <View style={styles.wordContainer}>
            <Text style={styles.word}>Ephemeral</Text>
            <Text style={styles.definition}>Lasting for a very short time</Text>
          </View>
          <View style={styles.wordContainer}>
            <Text style={styles.word}>Tenacious</Text>
            <Text style={styles.definition}>Tending to keep a firm hold of something</Text>
          </View>
          <View style={styles.wordContainer}>
            <Text style={styles.word}>Versatile</Text>
            <Text style={styles.definition}>Able to adapt to many different functions or situations</Text>
          </View>
        </View>
        
        <Text style={styles.description}>
          We'll send you three carefully selected SAT-level words every day as notifications.
        </Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate('Onboarding1')}
        >
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Onboarding3')}
        >
          <Text style={styles.buttonText}>Next</Text>
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
  imageContainer: {
    width: '90%',
    marginVertical: 30,
  },
  wordContainer: {
    backgroundColor: '#F5F7FA',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#4A6FA5',
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  definition: {
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

OnboardingScreen2.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default OnboardingScreen2;
