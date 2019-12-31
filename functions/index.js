const functions = require('firebase-functions');
const admin = require('firebase-admin');
// import credentials from 'credentials.json';

admin.initializeApp(functions.config().firebase);

exports.getGraduates = functions.https.onRequest((req, res) => {
  if (req.method !== 'GET') {
    return res.status(500).send("Invalid http method");
  }
  let graduates = [];
  admin.firestore().collection('graduates').get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      graduates.push(doc.data())
    });
    res.send(data);
  })
  .catch(error => {
    console.log(error)
    res.status(500).send(error)
    // res.status(500).send("Some problem occur.. Please try again later")
  })
});


// exports.getGraduates = functions.https.onRequest((req, res) => {
//   if (req.method !== 'POST') {
//     return res.status(500).send("Invalid http method");
//   }
//   const { uid, event1, event2 } = req.body.credentials;
//   if (event1 != credentials.event1 || event1 != credentials.event1 ) {
//     return res.status(200).json({
//       status: "failed"
//     });
//   } else{
//     if (uid )
//   }
//   admin.firestore().collection('graduates').get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       graduates.push(doc.data())
//     });
//     res.send(data);
//   })
//   .catch(error => {
//     console.log(error)
//     res.status(500).send(error)
//     // res.status(500).send("Some problem occur.. Please try again later")
//   })
// });

// const createNotification = ((notification) => {
//   return admin.firestore().collection('notifications')
//     .add(notification)
//     .then(doc => console.log('notification added', doc));
// });


// exports.projectCreated = functions.firestore
//   .document('projects/{projectId}')
//   .onCreate(doc => {

//     const project = doc.data();
//     const notification = {
//       content: 'Added a new project',
//       user: `${project.authorFirstName} ${project.authorLastName}`,
//       time: admin.firestore.FieldValue.serverTimestamp()
//     }

//     return createNotification(notification);

//   });

// exports.userJoined = functions.auth.user()
//   .onCreate(user => {

//     return admin.firestore().collection('users')
//       .doc(user.uid).get().then(doc => {

//         const newUser = doc.data();
//         const notification = {
//           content: 'Joined the party',
//           user: `${newUser.firstName} ${newUser.lastName}`,
//           time: admin.firestore.FieldValue.serverTimestamp()
//         };

//         return createNotification(notification);

//       });
//   });