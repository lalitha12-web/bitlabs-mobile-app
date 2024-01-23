const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bitlabs-bbec7.firebaseio.com" // Replace 'your-project-id' with your Firebase project ID
});

// Initialize the Firebase Admin SDK
const db = admin.firestore();

exports.fetchDataAndStoreToFirestore1 = functions.https.onRequest(async (req, res) => {
  try {
    const response = await axios.get(
      'https://bitlabs.talentlms.com/api/v1/users',
      {
        headers: {
          'Authorization': 'Basic YlhmWmpZM2pxRDJ4UTFuUjk0OGJ2UElJaUhoeDhBOg==',
          'Cookie': 'AWSALB=w+XsJk9C2dY6MoIFVlTHMmxTd5mVvya0IP08GMQAyKc/CmI9mQKW7V6H4yIcOx3es3cbFnwNy0gLgXljsu8FF6I7fNhna28NMossCt5QNeHjWGWh15PYSdf6k9Pt; AWSALBCORS=w+XsJk9C2dY6MoIFVlTHMmxTd5mVvya0IP08GMQAyKc/CmI9mQKW7V6H4yIcOx3es3cbFnwNy0gLgXljsu8FF6I7fNhna28NMossCt5QNeHjWGWh15PYSdf6k9Pt; PHPSESSID=elb~808vts0ugbrcnisdi33grn706i'
        }
      }
    );

    const responseData = response.data;

    for (const item of responseData) {
      const email = item.email;
      const emailDoc = await db.collection('profile').doc(email).get();

      if (!emailDoc.exists) {
        await db.collection('profile').doc(email).set(item);
        console.log(`Email ${email} added to Firestore.`);
      }
    }

    console.log('API response saved to Firestore');
    res.status(200).send('API response saved to Firestore');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from API or saving to Firestore: ' + error);
  }
});
