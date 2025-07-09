import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Register for push notifications
export async function registerForPushNotificationsAsync() {
  let token;
  
  if (Platform.OS === 'android') {
    // Set notification channel for Android
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#4A6FA5',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    
    // Project ID is only required if using EAS Build for deployment
    token = (await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig?.extra?.eas?.projectId,
    })).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

// Schedule daily notifications with 3 new SAT words
export async function scheduleDailyWordNotifications(wordsList) {
  try {
    // Cancel any existing notifications first
    await Notifications.cancelAllScheduledNotificationsAsync();
    
    // Get a record of words that have been sent
    const sentWordsString = await AsyncStorage.getItem('@sent_words');
    const sentWords = sentWordsString ? JSON.parse(sentWordsString) : [];
    
    // Filter out words that have already been sent
    const availableWords = wordsList.filter(word => !sentWords.includes(word.word));
    
    // If we're running out of words, reset the sent words
    if (availableWords.length < 3) {
      await AsyncStorage.setItem('@sent_words', JSON.stringify([]));
      // Use the full list again
      availableWords = wordsList;
    }
    
    // Select 3 random words
    const selectedWords = [];
    for (let i = 0; i < 3; i++) {
      if (availableWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        selectedWords.push(availableWords[randomIndex]);
        availableWords.splice(randomIndex, 1); // Remove the word to prevent duplicates
      }
    }
    
    // Update sent words record
    const newSentWords = [...sentWords, ...selectedWords.map(word => word.word)];
    await AsyncStorage.setItem('@sent_words', JSON.stringify(newSentWords));
    
    // Schedule the notification for tomorrow at 9 AM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0); // 9:00 AM
    
    // Create the notification content
    const content = {
      title: "📚 Today's SAT Words",
      body: selectedWords.map(word => `${word.word}: ${word.definition}`).join('\n\n'),
      data: { selectedWords },
    };
    
    // Schedule the notification
    await Notifications.scheduleNotificationAsync({
      content,
      trigger: {
        date: tomorrow,
        repeats: true,
        seconds: 24 * 60 * 60, // Daily
      },
    });
    
    return selectedWords;
  } catch (error) {
    console.error('Error scheduling notifications:', error);
    return null;
  }
}

// Send an immediate test notification with 3 words
export async function sendTestWordNotification(wordsList) {
  try {
    // Select 3 random words
    const randomWords = [];
    const tempList = [...wordsList]; // Create a copy to avoid modifying the original
    
    for (let i = 0; i < 3; i++) {
      if (tempList.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempList.length);
        randomWords.push(tempList[randomIndex]);
        tempList.splice(randomIndex, 1); // Remove the word to prevent duplicates
      }
    }
    
    // Create the notification content
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "📚 Test: Today's SAT Words",
        body: randomWords.map(word => `${word.word}: ${word.definition}`).join('\n\n'),
        data: { randomWords },
      },
      trigger: null, // Send immediately
    });
    
    return randomWords;
  } catch (error) {
    console.error('Error sending test notification:', error);
    return null;
  }
}
