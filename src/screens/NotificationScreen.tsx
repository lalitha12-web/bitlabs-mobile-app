
/* eslint-disable */
import { View, Text } from 'react-native'
import React from 'react'
import Header from '../shared/Header'
import BottomNavigation from '../shared/BottomNavigation';

const NotificationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <Text>Notification</Text>
      </View>
      <BottomNavigation />
    </View>
  );
}

export default NotificationScreen