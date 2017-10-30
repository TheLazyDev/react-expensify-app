import * as firebase from 'firebase';

  // Initialize Firebase
 const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(config);

  
  const database = firebase.database();

 export {firebase, database as default};

//  "AIzaSyAdysvEhLq0AIkgo1x_yKaO-qr9Nr7AwFw"
//  "react-expensify.firebaseapp.com" 
//  "https://react-expensify.firebaseio.com"
//  "react-expensify"
//  "react-expensify.appspot.com"
//  "655618251751"

  // database.ref('expenses').on('child_removed',(snapshot)=>{
  //   console.log(snapshot.key,snapshot.val());
  // })

  // database.ref('expenses').on('child_changed',(snapshot)=>{
  //   console.log(snapshot.key,snapshot.val());
  // })

  // database.ref('expenses').on('child_added',(snapshot)=>{
  //   console.log(snapshot.key,snapshot.val());
  // })
    
  // database.ref('expenses').push({
  //   description: "Random description",
  //   note: "Random Note",
  //   amount: 1000,
  //   createdAt:978721382472824
  // 150909450117
  // })



  // database.ref('expenses')
  //     .once('value')
  //     .then((snapshot)=>{
  //       const expenses = [];

  //       snapshot.forEach((childSnapshot)=>{
  //            expenses.push({
  //              id: childSnapshot.key,
  //              ...childSnapshot.val()
  //            })
  //       })

  //       console.log(expenses);
  //     })



  // database.ref('expenses').on('value',(snapshot)=>{
  //         const expenses = [];
    
  //           snapshot.forEach((childSnapshot)=>{
  //                expenses.push({
  //                  id: childSnapshot.key,
  //                  ...childSnapshot.val()
  //                })
  //           })
    
  //           console.log(expenses);
  // })

  // database.ref('expenses').push({
  //   description: "Random description 1",
  //   note: "Random Note 1",
  //   amount: 1090,
  //   createdAt:978721382472832324
  // })

  // database.ref('expenses').push({
  //   description: "Random description 2",
  //   note: "Random Note 2",
  //   amount: 2000,
  //   createdAt:978721382472824
  // })

  // database.ref().on('value',(snapshot)=>{
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `)
  // })
//  const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
//  },(e)=>{
//    console.log("Error with data fetching",e)
//  })


//  setTimeout(()=>{
//     database.ref('age').set(29);
//  },3500)

//  setTimeout(()=>{
//   database.ref().off('value',onValueChange);
// },7000)

// setTimeout(()=>{
//   database.ref('age').set(30);
// },10500)

//  database.ref('location/city')
//    .once('value')
//    .then((snapshot)=>{
//     console.log(snapshot.val());
//    })
//    .catch((e)=>{
//      console.log('Error fetching data: ',e)
//    })

//   database.ref().set({
//       name: 'Andrew',
//       age: 26,
//       stressLevel:6,
//       job: {
//         title: 'Software developer',
//         company: "Google"
//       },
//       location:{
//         city: 'Jalandhar',
//         country: 'India'
//       }
//   }).then(()=>{
//     console.log('Date is saved!');
//   }).catch((e)=>{
//      console.log('error: ',e);
//   })

// //  database.ref('isSingle')
// //       .remove()
// //       .then(()=>{
// //         console.log('Data was removed');
// //       }).catch((e)=>{
// //         console.log('Error: ',e)
// //       })

// database.ref().update({
//   stressLevel:9,
//   'job/company': "Amazon",
//   'location/city':'Seattle'
// })

// database.ref('isSingle').set(null);