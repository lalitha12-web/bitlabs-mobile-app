/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer,useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ChatScreen from './src/screens/ChatScreen';
import BottomNavigation from './src/shared/BottomNavigation';
import Header from './src/shared/Header'
import AuthContext from './src/Service/AuthContext';
import auth from '@react-native-firebase/auth';


const App=() => {
  const Stack=createNativeStackNavigator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return subscriber; // unsubscribe on unmount
  }, []);
 
  return (
    
  <AuthContext.Provider value={user}>
   <NavigationContainer>
   
        <Stack.Navigator >
          <Stack.Screen name="Welcome"component={WelcomeScreen}options={{ headerShown: false }}/>
          <Stack.Screen name="Home"component={HomeScreen}options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen}options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Header" component={Header} options={{ headerShown: false }}/>
        </Stack.Navigator>
        {/* <BottomNavigation /> */}
        
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
}


export default App;
