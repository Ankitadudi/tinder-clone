import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJMhQHUUuVNd2AxbtpzV70uuXdyf9GOU4",
    authDomain: "tinder-clone-c44a2.firebaseapp.com",
    projectId: "tinder-clone-c44a2",
    storageBucket: "tinder-clone-c44a2.appspot.com",
    messagingSenderId: "404155725977",
    appId: "1:404155725977:web:89b4fdfa77145f445f6008",
    measurementId: "G-ZZEG99VZG5"
  };
    //https://static01.nyt.com/images/2015/05/13/arts/13BOOKVANCE/13BOOKVANCE-articleLarge.jpg?quality=75&auto=webp&disable=upscale
    //https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT
    //https:yt3.ggpht.com/ytc/AAUvwnhJnlaebBXt9SkmEDGK-erZmiEgb7AFBYbKpQ6T9w=s900-c-k-c0x00ffffff-no-rj
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;
