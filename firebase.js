import * as firebase from "firebase";
import getEnv from "./environment";

const firebaseConfig = {
  apiKey: getEnv().firebase.apiKey,
  projectId: getEnv().firebase.projectId,
  storageBucket: getEnv().firebase.storageBucket,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Create a child reference
// var imagesRef = storageRef.child('images');
// imagesRef now points to 'images
