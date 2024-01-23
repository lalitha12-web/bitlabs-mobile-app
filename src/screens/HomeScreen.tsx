import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import WelcomeScreen from './WelcomeScreen';
import BottomNavigation from '../shared/BottomNavigation';
import Header from '../shared/Header';
import AchievementInfoView from '../view/AchievementInfoView';


const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.Container}>
        <Text style={styles.sectionTitle}>DashBoard</Text>
        <AchievementInfoView />
        <View>
        <View style={styles.sectionContainer1}> 
          <Text style={styles.sectionTitle}>Group Chat</Text>
          <View style={styles.rowContainer1}>
            <View style={styles.imageContainer}>
              <Image style={styles.image1} resizeMode="contain" source={require('../assets/Technical.png')} />
            </View>
            <View style={styles.imageContainer}>
              <Image style={styles.image1} resizeMode="contain" source={require('../assets/softskills.png')} />
            </View>
          </View>
        </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>My Mentor</Text>
          <View style={styles.rowContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} resizeMode="contain" source={require('../assets/Nagul.png')} />
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Image 1</Text>
              <Text style={styles.infoText}>Information about Image 1</Text>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} resizeMode="contain" source={require('../assets/Shabna.png')} />
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Image 2</Text>
              <Text style={styles.infoText}>Information about Image 2</Text>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} resizeMode="contain" source={require('../assets/Teja.png')} />
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Image 3</Text>
              <Text style={styles.infoText}>Information about Image 3</Text>
            </View>
          </View>
        </View>

      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginLeft:10,
    marginRight:10,
  },
  sectionContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10, // Add marginBottom for gap between sections
  },
  sectionContainer1: {
    backgroundColor: '#FCF9F9',
    padding: 20,
    marginBottom: 10,
     // Add marginBottom for gap between sections
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FCF9F9',
    borderRadius:15,
    marginLeft:5,
    marginRight:5,
    
  },
  rowContainer1: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems:'center',
    justifyContent: 'center', 
  },
  imageContainer: {
    flex: 1,
    marginRight: 5,
    marginLeft:5,
    padding:5
  },
  image: {
    flex: 1,
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    // Maintain aspect ratio of the image
  },
  image1: {
    flex: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 1, // Maintain aspect ratio of the image
  },
  info: {
    flex: 2,
    justifyContent: 'center',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
