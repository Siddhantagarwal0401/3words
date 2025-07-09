import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* Page indicator */}
        <View style={styles.pageIndicator}>
          <View style={[styles.pageIndicatorDot, styles.pageIndicatorActive]} />
          <View style={styles.pageIndicatorDot} />
          <View style={styles.pageIndicatorDot} />
        </View>
        
        <Text style={styles.logo}>Word3</Text>
        
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Build a powerful SAT vocabulary</Text>
          <Text style={styles.subheading}>
            We'll send you 3 carefully chosen SAT words every morning. No distractions. Just notifications.
          </Text>
        </View>
        
        <View style={styles.illustrationContainer}>
          <View style={styles.notificationExample}>
            <View style={styles.notificationHeader}>
              <Text style={styles.notificationApp}>Word3</Text>
              <Text style={styles.notificationTime}>Now</Text>
            </View>
            <Text style={styles.notificationTitle}>Your Daily Words</Text>
            <Text style={styles.notificationContent}>Ephemeral: Lasting for a very short time</Text>
          </View>
        </View>

        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.centeredButton}
            onPress={() => navigation.navigate('Onboarding2')}
          >
            <Text style={styles.centeredButtonText}>Next</Text>
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
  logo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4A6FA5',
    textAlign: 'center',
    marginBottom: 24,
  },
  contentContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  illustrationContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  notificationExample: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  notificationApp: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A6FA5',
  },
  notificationTime: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  notificationContent: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  navigationContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
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
  centeredButton: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 14,
    paddingHorizontal: 64,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#4A6FA5',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  centeredButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

OnboardingScreen1.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default OnboardingScreen1;
