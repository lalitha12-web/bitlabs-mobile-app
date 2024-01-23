import React,{ useContext,useState }from 'react';
import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native';
import Header from '../shared/Header';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import BottomNavigation from '../shared/BottomNavigation';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../Service/AuthContext';
import ProfileView from '../view/ProfileView';
//import UserProfileViewModel from '../ViewModel/UserProfileViewModel';


const Profile = () => {
  const navigation = useNavigation();
  const user = useContext(AuthContext);
 // const viewModel={viewModel:UserProfileViewModel};
//  const [showContactInfo, setShowContactInfo] = useState(false);
//  const [showExternalLinks, setShowExternalLinks] = useState(false);

  const handleSignOut = async () => {
    try {
      //await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
      navigation.navigate('Welcome');
    } catch (error) {
      console.error(error);
    }
  };
  // const userProfileViewModel = new UserProfileViewModel();
  // const toggleContactInfo = () => {
  //   setShowContactInfo(!showContactInfo);
  // };

  // const toggleExternalLinks = () => {
  //   setShowExternalLinks(!showExternalLinks);
  // };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView >
    
    <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.imageContainer}>
      {user && user.photoURL && (
        <Image source={{ uri: user.photoURL }} style={styles.profileImage} />
      )}
      </View>
      <View>
      <ProfileView />
      </View>
    </ScrollView>
    <BottomNavigation/>
    </View>

  );
};

const styles = {
  scontainer: {
    padding: 20,
  },
  container: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
    padding:10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'black',
  },
  signOutButton: {
    marginTop: 10,
    backgroundColor: '#E45625',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 15,
    
  },
  imageContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 100,
    
  },
};

export default Profile;
