const functions = require('firebase-functions');
const admin = require('firebase-admin');
const credentials = require('./credentials.json')
const express = require('express');
const cors = require('cors');
const gcs = require('@google-cloud/storage'); ({ keyFilename: 'ourpromise-25c45a080fbc.json' });
const serviceAccount = require("./ourpromise-25c45a080fbc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ourpromise.firebaseio.com"
});
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
app.post('/verify', (req, res) => {
  const { uid, event1, event2 } = req.body
  if (req.method !== 'POST') {
    return res.status(500).send("Invalid http method");
  };

  return new Promise((resolve, reject) => {
    if (event1 == credentials.event1 && event2 == credentials.event2) {
      let userRef = admin.firestore().collection('users').doc(uid);
      userRef.set({
        verified: true
      }, { merge: true });
      resolve(userRef.get());
    } else {
      reject("Wrong credentials event 1:");
    }
  });
});

app.get('/graduates/:id', (req, res) => {
  admin.firestore().collection('graduates').doc(req.params.id).get()
    .then(snapshot => {
      let data = snapshot.data();
      let birthday = new Date(data.birthday._seconds*1000);
      data = {
        ...data,
        birthday: birthday.toDateString()
      }
      res.send(data);
      // const bucket = gcs.bucket("gs://ourpromise.appspot.com/graduates");
      // const file = bucket.file(`${data.name}.jpg`);
      // return file.getSignedUrl({
      //   action: 'read',
      //   expires: '03-09-2491'
      // })
      //   .then(signedUrls => {
      //     data.image = signedUrls[0]
      //     res.send(data);
      //   })
      //   .catch(err => console.log("fail to get graduate image url: ", err));
    })
    .catch(error => console.log("fail to get graduate info: ", error))
});

app.post('/', (req, res) => res.send(Widgets.create()));
// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
