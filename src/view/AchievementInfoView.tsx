import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProfileViewModel from '../ViewModel/ProfileViewModel';

const AchievementInfoView = () => {
  const viewModel = new ProfileViewModel();
  const { profile } = viewModel;
  const [showAchievementInfo, setShowAchievementInfo] = useState(false);
  const toggleAchievementInfo = () => {
    setShowAchievementInfo(!showAchievementInfo);
  };
  return (
    <View>
    
   
  <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
        <View style={[styles.box, { backgroundColor: '#FFF6E8' }]}>
            <Text style={[styles.value,{color:'#FBB03A'}]}>{profile.attendance.totalDays}</Text>
            <Text style={[styles.text,{color:'#FBB03A'}]}>Attendance</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#FFDFE3' }]}>
            <Text style={[styles.value,{color:'#EC325D'}]}>{profile.ranking.rank}</Text>
            <Text style={[styles.text,{color:'#EC325D'}]}>Ranking</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#F9E6D9' }]}>
            <Text style={[styles.value,{color:'#F58036'}]}>{profile.training.hours}</Text>
            <Text style={[styles.text,{color:'#F58036'}]}>Training Hours</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
        <View style={[styles.box, { backgroundColor: '#E1FFEA' }]}>
        <Text style={[styles.value,{color:'#2AB275'}]}>{profile.scores.technical}</Text>
        <Text style={[styles.text,{color:'#2AB275'}]}>Technical Score</Text>
        </View>
          <View style={[styles.box, { backgroundColor: '#DDFFFE' }]}>
          <Text style={[styles.value,{color:'#1AA4B1'}]}>{profile.scores.softskill}</Text>
          <Text style={[styles.text,{color:'#1AA4B1'}]}>Soft Skills Score</Text>  
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={[styles.fullWidthBox,{ backgroundColor: '#DBE5FD' }]}>
          <Text style={[styles.value,{color:'#2E6DE5'}]}>{profile.scores.grandTest.averageScore}</Text>
          <Text style={[styles.text,{color:'#2E6DE5'}]}>Grand Test Score</Text>
           
          </View>
        </View>
      </View>
   
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#fcf9f9',
    borderWidth: 1,
    borderColor: '#dcdfe3',
    //borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  toggleButtonText: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 17,
    fontWeight: 'bold',
  },
  arrowImage: {
    width: 10,
    height: 10,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10, 
    marginLeft:5,
    marginRight:5,// Add marginBottom for gap between boxes
  },
  box: {
    
    flex: 1,
    marginHorizontal: 5, // Add equal horizontal spacing between boxes
    padding: 20,
    // borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft:5,
    marginRight:5,
  },
  text: {
    fontSize: 10, // Adjust the font size for the text
    marginBottom: 5, // Add spacing between text and value
    fontWeight: 'bold',
  },
  value: {
    fontSize: 30, // Adjust the font size for the value
    fontWeight: 'bold', // Optionally, apply bold font weight
  },
  
  fullWidthBox: {
    flex: 1,
    backgroundColor: '#ffffff',
    //borderRadius: 5,
    padding: 20,
    //width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5,
    marginRight:5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  
});

export default AchievementInfoView;
