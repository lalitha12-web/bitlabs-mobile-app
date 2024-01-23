import React,{ useContext } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screens/HomeScreen';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthContext from '../Service/AuthContext';


const Header = ()  => {
  const navigation = useNavigation();
  const user = useContext(AuthContext);
  const route = useRoute();
  console.log(user);
  const isHomeScreen = route.name === 'Home';
  return (
    <LinearGradient
      colors={[ '#E45625','#FA801D']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.container, { justifyContent: 'center' }]}
    >
      
      {!isHomeScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftImageContainer}>
          <Image
            source={require('../assets/back_arrow.png')}
            style={styles.leftImage}
          />
        </TouchableOpacity>
      )}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/header_logo.png')}
          style={styles.logo}
        />
        
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.rightImageContainer}>
        
      {user && user.photoURL && (
        <Image source={{ uri: user.photoURL }} style={styles.rightImage}  />  
      )}
      </TouchableOpacity>
     
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 16,
    justifyContent: 'space-between', // Apply top right corner radius
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    
    
  },
  leftImageContainer: {
    paddingLeft: 16,
  },
  leftImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  rightImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius:50
  },
  rightImageContainer: {
    paddingLeft: 16,
  },
  
});

export default Header;
