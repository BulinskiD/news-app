import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyAq7o__S12lcutbkuHQqVvxtJj0lipP7M4",
  authDomain: "newsapp-dcef4.firebaseapp.com",
  databaseURL: "https://newsapp-dcef4.firebaseio.com",
  projectId: "newsapp-dcef4",
  storageBucket: "newsapp-dcef4.appspot.com",
  messagingSenderId: "753137839238",
  appId: "1:753137839238:web:e22f56da2f040ec4f33507",
  measurementId: "G-F9N2PM2S54",
};

export default () => {
  firebase.initializeApp(config);
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey(
    "BOkwvzmAszF6PgV2ZbUVaKN2E6R7xQW0rA__Rta0q1eliYCCs0nttlCbtlQyRpVnCaRObd-QUKvMdWkZ3gH3lIg;"
  );
  messaging.onMessage(console.log);
};
