import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyNa-ZLCJM5wlvj0mi6CspqcBS25L5V1s",
  authDomain: "catch-of-day-2.firebaseapp.com",
  databaseURL: "https://catch-of-day-2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;


