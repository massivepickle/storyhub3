import * as firebase from 'firebase';

require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyD7hl1EcGAIJC3USDwEYB8D8wHoiUV-N8o",
    authDomain: "storyhub-c645c.firebaseapp.com",
    databaseURL: "https://storyhub-c645c.firebaseio.com",
    projectId: "storyhub-c645c",
    storageBucket: "storyhub-c645c.appspot.com",
    messagingSenderId: "354705618817",
    appId: "1:354705618817:web:bdb6371e0499c6bdf85a80"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();