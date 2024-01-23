import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image } from 'react-native';
import ProfileViewModel from '../ViewModel/ProfileViewModel';

const ProfileView = () => {
  const viewModel = new ProfileViewModel();
  const { profile } = viewModel;

  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showExternalLinks, setShowExternalLinks] = useState(false);
  const [showDeploymentInfo, setShowDeploymentInfo] = useState(false);
  const [showOnboardingInfo, setShowOnboardingInfo] = useState(false);
  const [showAchievementInfo, setShowAchievementInfo] = useState(false);
  const [showAcademicInfo, setShowAcademicInfo] = useState(false);
  const [showPaymentsInfo, setShowPaymentsInfo] = useState(false);
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);
  const toggleSecurityInfo = () => {
    setShowSecurityInfo(!showSecurityInfo);
  };

  const togglePaymentsInfo = () => {
    setShowPaymentsInfo(!showPaymentsInfo);
  };
  const toggleAcademicInfo = () => {
    setShowAcademicInfo(!showAcademicInfo);
  };
  const toggleAchievementInfo = () => {
    setShowAchievementInfo(!showAchievementInfo);
  };

  const toggleOnboardingInfo = () => {
    setShowOnboardingInfo(!showOnboardingInfo);
  };

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  const toggleExternalLinks = () => {
    setShowExternalLinks(!showExternalLinks);
  };

  const toggleDeploymentInfo = () => {
    setShowDeploymentInfo(!showDeploymentInfo);
  };

  return (
    <View>
      <View>
    <TouchableOpacity
        style={[styles.buttonContainer, showContactInfo && styles.activeButtonContainer]}
        onPress={toggleContactInfo}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>Contact Info</Text>
        {/* <Text style={styles.buttonValue}>{viewModel.userProfile.contactInfo}</Text> */}
        <Image
          source={showContactInfo ? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {showContactInfo && (
        <View style={[styles.section, styles.contactInfo]}>
          <Text style={styles.heading}>Unique ID:</Text>
          <TextInput style={styles.input} value={profile.uniqueId} editable={false} />
          <Text style={styles.heading}>Name:</Text>
          <TextInput style={styles.input} value={profile.name} editable={false} />
          <Text style={styles.heading}>Email:</Text>
          <TextInput style={styles.input} value={profile.email} editable={false} />
          <Text style={styles.heading}>Phone Number:</Text>
          <TextInput style={styles.input} value={profile.phoneNumber} editable={false} />
          <Text style={styles.heading}>Address:</Text>
          <TextInput style={styles.input} value={profile.address} editable={false} />
          <Text style={styles.heading}>Primary Contact:</Text>
          <TextInput style={styles.input} value={profile.primaryContact} editable={false} />
        </View>
      )}
      </View>
      <View>
    <TouchableOpacity
        style={[styles.buttonContainer, showExternalLinks && styles.activeButtonContainer]}
        onPress={toggleExternalLinks}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>External Links</Text>
        {/* <Text style={styles.buttonValue}>{viewModel.userProfile.contactInfo}</Text> */}
        <Image
          source={showExternalLinks? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {showExternalLinks&& (
        <View style={[styles.section, styles.externallinks]}>
        <Text style={styles.heading}>Google Drive:</Text>
        <TextInput style={styles.input} value={profile.externalLinks.googleDriveLink} editable={false} />
        <Text style={styles.heading}>GitHub:</Text>
        <TextInput style={styles.input} value={profile.externalLinks.githubLink} editable={false} />
        <Text style={styles.heading}>LinkedIn:</Text>
        <TextInput style={styles.input} value={profile.externalLinks.linkedInLink} editable={false} />
      </View>
      )}
      </View>
      {/* DeploymentInfo */}
      <View>
      <TouchableOpacity
        style={[styles.buttonContainer, showDeploymentInfo && styles.activeButtonContainer]}
        onPress={toggleDeploymentInfo}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>Deployment Info</Text>
        <Image
          source={showDeploymentInfo ? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>

      {showDeploymentInfo && (
        <View style={[styles.section,styles.deployment]}>
          <View >
            <Text style={styles.subheading}>Interviews</Text>
            {profile.interviews.map((interview, index) => (
              <View key={index}>
                <Text style={styles.heading}>Date:</Text>
                <TextInput style={styles.input} value={interview.date} editable={false} />
                <Text style={styles.heading}>Company Info:</Text>
                <TextInput style={styles.input} value={interview.companyInfo} editable={false} />
                <Text style={styles.heading}>Result:</Text>
                <TextInput style={styles.input} value={interview.result} editable={false} />
                <Text style={styles.heading}>Role:</Text>
                <TextInput style={styles.input} value={interview.role} editable={false} />
                <Text style={styles.heading}>Interview Location:</Text>
                <TextInput style={styles.input} value={interview.interviewLocation} editable={false} />
                <Text style={styles.heading}>Feedback:</Text>
                <TextInput style={styles.input} value={interview.feedback} editable={false} />
              </View>
            ))}
          </View>

          <View>
            <Text style={styles.subheading}>Placement Info</Text>
            <Text style={styles.heading}>Company Info:</Text>
            <TextInput style={styles.input} value={profile.placementInfo.companyInfo} editable={false} />
            <Text style={styles.heading}>Mode of Placement:</Text>
            <TextInput style={styles.input} value={profile.placementInfo.modeOfPlacement} editable={false} />
            <Text style={styles.heading}>Joining Date:</Text>
            <TextInput style={styles.input} value={profile.placementInfo.joiningDate} editable={false} />
            <Text style={styles.heading}>Package Info:</Text>
            <TextInput style={styles.input} value={profile.placementInfo.packageInfo} editable={false} />
          </View>
        </View>
      )}
    </View>
    <View>
      <TouchableOpacity
        style={[styles.buttonContainer, showOnboardingInfo && styles.activeButtonContainer]}
        onPress={toggleOnboardingInfo}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>Onboarding Info</Text>
        <Image
          source={showOnboardingInfo ? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {showOnboardingInfo && (
        <View style={[styles.section, styles.onboardingInfo]}>
          <Text style={styles.heading}>Batch:</Text>
          <TextInput style={styles.input} value={profile.onboarding.batch.name} editable={false} />
          <Text style={styles.heading}>Mentor:</Text>
          <TextInput style={styles.input} value={profile.onboarding.mentor.name} editable={false} />
          <Text style={styles.heading}>Email:</Text>
          <TextInput style={styles.input} value={profile.onboarding.mentor.email} editable={false} />
          <Text style={styles.heading}>Specialization:</Text>
          <TextInput style={styles.input} value={profile.onboarding.mentor.specialization} editable={false} />
          <Text style={styles.heading}>LMS ID:</Text>
          <TextInput style={styles.input} value={profile.onboarding.lms.id} editable={false} />
          <Text style={styles.heading}>Start Date:</Text>
          <TextInput style={styles.input} value={profile.onboarding.lms.startDate} editable={false} />
          <Text style={styles.heading}>End Date:</Text>
          <TextInput style={styles.input} value={profile.onboarding.lms.endDate} editable={false} />
          <Text style={styles.heading}>Plan Info:</Text>
          <TextInput style={styles.input} value={profile.onboarding.lms.planInfo} editable={false} />
        </View>
      )}
    </View>
    {/* Achievement Info */}
    <View>
      <TouchableOpacity
        style={[styles.buttonContainer, showAchievementInfo && styles.activeButtonContainer]}
        onPress={toggleAchievementInfo}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>AchievementInfo</Text>
        <Image
          source={showAchievementInfo? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {showAchievementInfo && (
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
      )}
        </View>
        {/* AcademicInfo */}
        <View>
      <TouchableOpacity
        style={[styles.buttonContainer, showAcademicInfo && styles.activeButtonContainer]}
        onPress={toggleAcademicInfo}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>Academic Info</Text>
        <Image
          source={showAcademicInfo ? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {showAcademicInfo && (
        <View style={[styles.section, styles.academicInfo]}>
          <Text style={styles.heading}>Diploma:</Text>
          <Text style={styles.subheading}>CGPA:</Text>
          <TextInput style={styles.input} value={profile.diploma.cgpa.toString()} editable={false} />
          <Text style={styles.subheading}>Info:</Text>
          <TextInput style={styles.input} value={profile.diploma.info} editable={false} />
          <Text style={styles.subheading}>Specialization:</Text>
          <TextInput style={styles.input} value={profile.diploma.specialization} editable={false} />
          <Text style={styles.subheading}>Level:</Text>
          <TextInput style={styles.input} value={profile.diploma.level} editable={false} />
          <Text style={styles.subheading}>Graduating Year:</Text>
          <TextInput style={styles.input} value={profile.diploma.graduatingYear.toString()} editable={false} />
        </View>
      )}
    </View>
    {/* PaymentInfo */}

    <View>
      <TouchableOpacity
        style={[styles.buttonContainer, showPaymentsInfo && styles.activeButtonContainer]}
        onPress={togglePaymentsInfo}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>Payments Info</Text>
        <Image
          source={showPaymentsInfo ? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>

      {showPaymentsInfo && (
        <View style={[styles.section, styles.paymentsInfo]}>
          <Text style={styles.heading}>Bank Info</Text>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={profile.payments.bankInfo.name}
            editable={false}
          />
          <Text style={styles.label}>Branch Info:</Text>
          <TextInput
            style={styles.input}
            value={profile.payments.bankInfo.branchInfo}
            editable={false}
          />
          <Text style={styles.label}>Account No:</Text>
          <TextInput
            style={styles.input}
            value={profile.payments.bankInfo.accountNo}
            editable={false}
          />
          <Text style={styles.label}>IFSC Code:</Text>
          <TextInput
            style={styles.input}
            value={profile.payments.bankInfo.IFSCCode}
            editable={false}
          />

          <Text style={styles.heading}>Stipend</Text>
          <Text style={styles.label}>Current Amount:</Text>
          <TextInput
            style={styles.input}
            value={profile.payments.stipend.currentAmount.toString()}
            editable={false}
          />
          <Text style={styles.label}>Stipend History:</Text>
          {profile.payments.stipend.history.map((entry, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>Amount</Text>
            <TextInput style={styles.input} value={entry.amount.toString()} />
            <Text style={styles.label}>Transaction Date</Text>
            <TextInput style={styles.input} value={entry.transactionDate} />
          </View>
        ))}
        <Text style={styles.subheading}>Fees History</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Total Amount</Text>
          <TextInput style={styles.input} value={profile.payments.fees.totalAmount.toString()} />
        </View>
        {profile.payments.fees.history.map((entry, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>Amount</Text>
            <TextInput style={styles.input} value={entry.amount.toString()} />
            <Text style={styles.label}>Transaction Date</Text>
            <TextInput style={styles.input} value={entry.transactionDate} />
          </View>
        ))}
        <Text style={styles.subheading}>Financial Partner</Text>
        <TextInput style={styles.input} value={profile.payments.financialPartner} />
        </View>
        
      )}
    </View>
    {/* SecurityInfo */}
    <View>
      <TouchableOpacity
        style={[styles.buttonContainer, showSecurityInfo && styles.activeButtonContainer]}
        onPress={toggleSecurityInfo}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonTitle}>Security Info</Text>
        <Image
          source={showSecurityInfo ? require('../assets/upArrow.png') : require('../assets/downArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {showSecurityInfo && (
        <View style={[styles.section, styles.securityInfo]}>
          <Text style={styles.heading}>Gmail:</Text>
          <TextInput style={styles.input} value={profile.security.gmail} editable={false} />
          <Text style={styles.heading}>UUID:</Text>
          <TextInput style={styles.input} value={profile.security.uuid} editable={false} />
          <Text style={styles.heading}>CRMId:</Text>
          <TextInput style={styles.input} value={profile.security.crmId} editable={false} />
          <Text style={styles.heading}>Status:</Text>
          <TextInput style={styles.input} value={profile.security.status} editable={false} />
        </View>
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    buttonContainer: {
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
    activeButtonContainer: {
      backgroundColor: '#dcdfe3',
    },
    buttonTitle: {
      color: 'black',
      textTransform: 'capitalize',
      fontSize: 17,
      fontWeight: 'bold',
    },
    buttonValue: {
      color: 'black',
      marginLeft: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    section: {
      paddingLeft: 20,
      marginBottom: 10,
    },
    academicInfo: {
        backgroundColor: 'white',
        padding: 10,
      },
    subheading: {
        fontWeight: 'bold',
        marginTop: 10,
      },
        //marginBottom: 5,
    
    contactInfo: {
      backgroundColor: 'white',
      padding: 10,
    },
    externallinks: {
      backgroundColor: 'white',
      padding: 10,
    },
    deployment: {
        backgroundColor: 'white',
        padding: 10,
      },
      onboardingInfo: {
        backgroundColor: 'white',
        padding: 10,
      },
    heading: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      marginBottom: 10,
      color:'black',
      fontWeight: 'bold',
    },
    externalLinksContainer: {
      marginTop: 10,
    },
    arrowImage: {
      width: 10,
      height: 10,
    },
    achievementInfo: {
        backgroundColor: 'white',
        padding: 10,
      },
      paymentsInfo: {
        backgroundColor: 'white',
        padding: 10,
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
      infoContainer: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10, 
        marginLeft:5,
        marginRight:5,// Add marginBottom for gap between boxes
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
      inputContainer: {
        marginBottom: 8,
      },
      securityInfo: {
        backgroundColor: 'white',
        padding: 10,
      },
  });
export default ProfileView;
