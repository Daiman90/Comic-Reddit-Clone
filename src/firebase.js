import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDH5RZuHfpIrLUun1Cx1xw6nKa7HZL-t1w',
  authDomain: 'comics-reddit.firebaseapp.com',
  databaseURL: 'https://comics-reddit.firebaseio.com',
  projectId: 'comics-reddit',
  storageBucket: 'comics-reddit.appspot.com',
  messagingSenderId: '923978166062',
  appId: '1:923978166062:web:fda0e3d64ca08b4c',
};
firebase.initializeApp(config);

export default firebase;
