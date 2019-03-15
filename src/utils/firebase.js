import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBFnKgGFBJ7tDKnB5WlfMLvm-B6OtcLHF0',
  authDomain: 'homesense-app.firebaseapp.com',
  databaseURL: 'https://homesense-app.firebaseio.com',
  projectId: 'homesense-app',
  storageBucket: 'homesense-app.appspot.com',
  messagingSenderId: '910654679544',
};

export default firebase.initializeApp(config).messaging();
