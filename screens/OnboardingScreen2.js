import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* Page indicator */}
        <View style={styles.pageIndicator}>
          <View style={styles.pageIndicatorDot} />
          <View style={[styles.pageIndicatorDot, styles.pageIndicatorActive]} />
          <View style={styles.pageIndicatorDot} />
        </View>
        
        <Text style={styles.headline}>3 Words Daily</Text>
        
        {/* Word examples with highlight effect */}
        <View style={styles.examplesContainer}>
          <View style={styles.wordExample}>
            <View style={styles.wordBadge}>
              <Text style={styles.wordNumber}>1</Text>
            </View>
            <View style={styles.wordContent}>
              <Text style={styles.wordTitle}>Ephemeral</Text>
              <Text style={styles.wordDescription}>Lasting for a very short time</Text>
            </View>
          </View>
          
          <View style={styles.wordExample}>
            <View style={styles.wordBadge}>
              <Text style={styles.wordNumber}>2</Text>
            </View>
            <View style={styles.wordContent}>
              <Text style={styles.wordTitle}>Tenacious</Text>
              <Text style={styles.wordDescription}>Tending to keep a firm hold of something</Text>
            </View>
          </View>
          
          <View style={styles.wordExample}>
            <View style={styles.wordBadge}>
              <Text style={styles.wordNumber}>3</Text>
            </View>
            <View style={styles.wordContent}>
              <Text style={styles.wordTitle}>Versatile</Text>
              <Text style={styles.wordDescription}>Able to adapt to many different functions or situations</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Just enough words for optimal retention. Not too few, not too many.</Text>
        </View>
        
        {/* Navigation buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.navigate('Onboarding1')}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={() => navigation.navigate('Onboarding3')}
          >
            <Text style={styles.nextButtonText}>Next</Text>
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
  examplesContainer: {
    marginBottom: 30,
  },
  wordExample: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  wordBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EBF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  wordNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A6FA5',
  },
  wordContent: {
    flex: 1,
  },
  wordTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  wordDescription: {
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
  nextButton: {
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
  nextButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default OnboardingScreen2;
