import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

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
      <View style={styles.wrapper}>
        {/* Page indicator */}
        <View style={styles.pageIndicator}>
          <View style={styles.pageIndicatorDot} />
          <View style={styles.pageIndicatorDot} />
          <View style={[styles.pageIndicatorDot, styles.pageIndicatorActive]} />
        </View>
        
        <Text style={styles.headline}>Distraction-free Learning</Text>
        
        {/* Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>🔔</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Daily Notifications</Text>
              <Text style={styles.featureDescription}>
                Words delivered straight to your device. No need to open the app.
              </Text>
            </View>
          </View>
          
          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>📚</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Expert-Curated Words</Text>
              <Text style={styles.featureDescription}>
                Carefully selected SAT vocabulary to boost your score effectively.
              </Text>
            </View>
          </View>
          
          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureEmoji}>⏰</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Time-Efficient</Text>
              <Text style={styles.featureDescription}>
                Learn new words without disrupting your routine or schedule.
              </Text>
            </View>
          </View>
        </View>
        
        {/* Information box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Word3 uses a science-based approach to vocabulary learning. Small, consistent exposure leads to better retention.
          </Text>
        </View>
        
        {/* Navigation buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.navigate('Onboarding2')}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.startButton} 
            onPress={completeOnboarding}
          >
            <Text style={styles.startButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  wrapper: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-between',
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  pageIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 6,
  },
  pageIndicatorActive: {
    backgroundColor: '#4A6FA5',
    width: 16,
  },
  headline: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 40,
  },
  featuresContainer: {
    marginBottom: 40,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EBF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  infoBox: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 40,
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 22,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6B7280',
  },
  startButton: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#4A6FA5',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  startButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

OnboardingScreen3.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default OnboardingScreen3;
