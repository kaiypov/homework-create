import firebase from 'firebase/compat/app'
import "firebase/compat/app"
import "firebase/compat/auth"




const firebaseConfig = {
  apiKey: "AIzaSyA62lVoLJDTrmyrZpPKQ6mqEt8ZQE3mfrc",
  authDomain: "project-with-mentor-326af.firebaseapp.com",
  projectId: "project-with-mentor-326af",
  storageBucket: "project-with-mentor-326af.appspot.com",
  messagingSenderId: "515970553833",
  appId: "1:515970553833:web:519a3847224863c0be1d78"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire;