import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCu2CSKx400IS2gO2IwRsW455fd_qvsHY",
    authDomain: "slack-clone-864c6.firebaseapp.com",
    projectId: "slack-clone-864c6",
    storageBucket: "slack-clone-864c6.appspot.com",
    messagingSenderId: "9985896018",
    appId: "1:9985896018:web:51468a6706d78c4761398b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };