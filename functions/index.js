const functions = require('firebase-functions');
const admin = require('firebase-admin');
const credentials = require('./credentials.json')
const express = require('express');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage')
const gcs = new Storage({ keyFilename: './ourpromise-25c45a080fbc.json' });
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

app.get('/graduates', (req, res) => {
  let docCount = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    admin.firestore().collection('graduates').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let data = doc.data();
          let birthday = new Date(data.birthday._seconds * 1000 + 28800000); //add 8 hours
          data = {
            ...data,
            birthday: birthday.toDateString(),
            id: doc.id,
          }
          const bucket = gcs.bucket("gs://ourpromise.appspot.com/graduates");
          const file = bucket.file(`${data.name}.jpg`);
          return file.getSignedUrl({
            action: 'read',
            expires: '03-09-2491'
          })
            .then(signedUrls => {
              data.image = signedUrls[0]
              result.push(data);
              docCount++;
              if (docCount === 156){
                res.send(result);
              }
            })
            .catch(err => console.log("fail to get graduate image url: ", err));
        })
      })
      .catch(error => console.log("fail to get graduate info: ", error))
  })
});

app.get('/graduates/:id', (req, res) => {
  admin.firestore().collection('graduates').doc(req.params.id).get()
    .then(snapshot => {
      let data = snapshot.data();
      let birthday = new Date(data.birthday._seconds * 1000 + 28800000); //add 8 hours
      data = {
        ...data,
        birthday: birthday.toDateString()
      }
      const bucket = gcs.bucket("gs://ourpromise.appspot.com/graduates");
      const file = bucket.file(`${data.name}.jpg`);
      return file.getSignedUrl({
        action: 'read',
        expires: '03-09-2491'
      })
        .then(signedUrls => {
          data.image = signedUrls[0]
          res.send(data);
        })
        .catch(err => console.log("fail to get graduate image url: ", err));
    })
    .catch(error => console.log("fail to get graduate info: ", error))
});

app.get('/execute', (req, res) => {
  // const test = csvdata.slice(0,1);
  csvdata.forEach((element) => {
    const splitting = element["birthday"].split("-");
    let birthday = new Date(splitting[0], splitting[1], splitting[2]);
    let final = {
      "name_ch": element["name_ch"],
      "name": element["name"],
      "gender": element["gender"],
      "lecture": element["lecture"],
      "tutorial": element["tutorial"],
      "phone": element["phone"],
      "birthday": birthday,
      "email": element["email"],
      "message": element["message"],
      "one-liner": element["one-liner"],
      "describe_me": [element["describe me1"], element["describe me 2"], element["describe me 3"],]
    };
    admin.firestore().collection('graduates').doc(`${element.id}`).set(final);
  });
});

app.post('/', (req, res) => res.send(Widgets.create()));
// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);

