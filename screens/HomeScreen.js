import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync, sendTestWordNotification, scheduleDailyWordNotifications } from '../utils/notificationHelper';
import satVocabulary from '../utils/wordsList';

const HomeScreen = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [todaysWords, setTodaysWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Register for notifications and schedule daily words
    const setupNotifications = async () => {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token);

      // Listen for incoming notifications
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
        // If the notification has words data, update today's words
        if (notification.request.content.data.randomWords || notification.request.content.data.selectedWords) {
          const words = notification.request.content.data.randomWords || notification.request.content.data.selectedWords;
          setTodaysWords(words);
        }
      });

      // Handle user tapping on a notification
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

      // Schedule daily notifications
      await scheduleDailyWordNotifications(satVocabulary);
    };

    setupNotifications();

    // Cleanup listeners on unmount
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // Send a test notification with 3 random words
  const handleRestartOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@onboarding_completed');
      Alert.alert(
        'Onboarding Reset',
        'The onboarding process has been reset. Please restart the app to see it again.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Error resetting onboarding:', error);
      Alert.alert('Error', 'Could not reset the onboarding status.');
    }
  };

  const handleTestNotification = async () => {
    setLoading(true);
    const words = await sendTestWordNotification(satVocabulary);
    setLoading(false);
    if (words) {
      setTodaysWords(words);
      Alert.alert(
        'Test Notification Sent',
        'Check your notifications to see today\'s vocabulary words.',
        [{ text: 'OK' }]
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Word3</Text>
        <Text style={styles.subtitle}>Your daily vocabulary is on its way</Text>
        
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>How it works</Text>
            <Text style={styles.cardDescription}>
              You'll receive 3 SAT vocabulary words daily as push notifications. No need to open the app every day!
            </Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Today's words</Text>
            {todaysWords.length > 0 ? (
              <View>
                {todaysWords.map((word, index) => (
                  <View key={index} style={styles.wordItem}>
                    <Text style={styles.wordText}>{word.word}</Text>
                    <Text style={styles.definitionText}>{word.definition}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.cardDescription}>
                Your words for today will arrive shortly. Check your notifications!
              </Text>
            )}
          </View>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Word3 is designed to be minimalist and distraction-free. Simply keep this app installed to receive daily vocabulary notifications.
          </Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.testButton} 
          onPress={handleTestNotification}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.buttonText}>Test Notification</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRestartOnboarding}>
          <Text style={styles.buttonText}>Restart Onboarding</Text>
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
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#666',
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#F5F7FA',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#4A6FA5',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  infoContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFFAED',
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#FFD966',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  testButton: {
    backgroundColor: '#22A699',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wordItem: {
    marginBottom: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  wordText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  definitionText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default HomeScreen;
