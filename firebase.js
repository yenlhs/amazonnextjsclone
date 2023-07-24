import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDWgZ7GQxLg-_wcl49aJoKhCntscUEgbGc',
	authDomain: 'nextjsclone.firebaseapp.com',
	projectId: 'nextjsclone',
	storageBucket: 'nextjsclone.appspot.com',
	messagingSenderId: '911903019121',
	appId: '1:911903019121:web:bc93ad5181d5dfd06c0bd0',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export default db;
