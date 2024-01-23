import { View, Text } from 'react-native'
import React from 'react'
import Header from '../shared/Header'
import BottomNavigation from '../shared/BottomNavigation';

const ChatScreen = () => {
  
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }}>
          <Text>Chat Screen</Text>
        </View>
        <BottomNavigation />
      </View>
    );

}

export default ChatScreen