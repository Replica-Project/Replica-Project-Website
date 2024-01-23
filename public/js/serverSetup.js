// function sdk import
import { initializeApp } from '../../node_modules/firebase/app';
import { getAnalytics } from '../../node_modules/firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCkWMq_xo5XY9xWaPdhNvEW-zMag2yLezU",
	authDomain: "replicaprojectweb.firebaseapp.com",
	databaseURL: "https://replicaprojectweb-default-rtdb.firebaseio.com",
	projectId: "replicaprojectweb",
	storageBucket: "replicaprojectweb.appspot.com",
	messagingSenderId: "218698441472",
	appId: "1:218698441472:web:ab6b203f7d3b1e272dc9e5",
	measurementId: "G-KWDDDK1FGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);