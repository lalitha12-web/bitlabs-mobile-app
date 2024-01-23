/*eslint-disable*/

import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();
  const handleNavigation = (screenName:String) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabButton} onPress={() => handleNavigation('Home')}>
        <Image source={require('../assets/menu.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Notification')} style={styles.tabButton}>
        <Image source={require('../assets/notification.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Calendar')} style={styles.tabButton}>
        <Image source={require('../assets/calendar.png')} style={styles.tabIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Chat')} style={styles.tabButton}>
        <Image source={require('../assets/chat-group.png')} style={styles.tabIcon} />
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FCF9F9',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
});

export default BottomNavigation;
