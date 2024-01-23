import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from './HomeScreen';

const WelcomeScreen = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId:
      '695249991955-fmfn2svtivjnkbsf4d70mnd6k9lstboc.apps.googleusercontent.com',
    offlineAccess: true,
  });

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);
  function onAuthStateChanged(user: any) {
    setUser(user);
    console.log(user);
    if (user) {
      setloggedIn(true);
      navigation.navigate('Home', {user: user._user});
    }
  }

  // const signIn = async () => {

  //       await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //       const {accessToken, idToken} = await GoogleSignin.signIn();
  //       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //       // Sign-in the user with the credential
  //       const user_sign_in= auth().signInWithCredential(googleCredential);
  //       user_sign_in.then((user)=>{
  //         setloggedIn(true);
  //         console.log(user);
  //         navigation.navigate('Home');
  //       })
  //       .catch((error=>{
  //         console.log(error);
  //       }))

  //   }
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the sign-in process
        console.log('Sign-in process cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Another sign-in process is already in progress
        console.log('Another sign-in process is already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated
        console.log('Play services not available or outdated');
      } else {
        // Other error occurred
        console.log('Google sign-in error:', error);
      }
    }
  };
  // const handlesignOut = async () => {
  //   try {
  //     console.log("hi");
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setloggedIn(false);
  //     setuserInfo([]);
  //     navigation.navigate('Welcome');
  //     // navigation.reset({
  //     //   index: 0,
  //     //   routes: [{ name: 'Welcome' }] // Navigate back to the WelcomeScreen
  //     // });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Screen1BG.png')}
        style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={signIn}>
            <View style={styles.buttonContent}>
              <Image
                source={require('../assets/google_logo.png')}
                style={styles.googleLogo}
              />
              <Text style={styles.buttonText}> Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/*

        <HomeScreen handleSignOut={signOut} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%',
  },
  logoImage: {
    aspectRatio: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 30,
  },
});

export default WelcomeScreen;
