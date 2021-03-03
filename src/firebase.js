import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbcBmHlpRlHgVwz1FoJBvimrHODDvscqg",
    authDomain: "slack-clone-b7ef2.firebaseapp.com",
    projectId: "slack-clone-b7ef2",
    storageBucket: "slack-clone-b7ef2.appspot.com",
    messagingSenderId: "458747743607",
    appId: "1:458747743607:web:4eb2e2090b3cf8e6966572"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
 