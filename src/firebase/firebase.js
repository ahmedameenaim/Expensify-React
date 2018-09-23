import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBL2qfvc5v7RuqVXwxJ8l2FiXtVI_uA75A",
    authDomain: "expensify-2c2e8.firebaseapp.com",
    databaseURL: "https://expensify-2c2e8.firebaseio.com",
    projectId: "expensify-2c2e8",
    storageBucket: "expensify-2c2e8.appspot.com",
    messagingSenderId: "774223533348"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase ,googleAuthProvider, database as default};