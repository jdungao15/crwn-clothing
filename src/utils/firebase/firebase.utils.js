import {initializeApp} from 'firebase/app';
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider
} from 'firebase/auth';


const firebaseConfig = {
   apiKey: "AIzaSyA7JQlI3DYxgsSGVVdNrZzfvMHuOfpCBzI",
   authDomain: "crwn-clothing-db-a6309.firebaseapp.com",
   projectId: "crwn-clothing-db-a6309",
   storageBucket: "crwn-clothing-db-a6309.appspot.com",
   messagingSenderId: "109584593574",
   appId: "1:109584593574:web:fe64a9bfe5f85a9d1afa67"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);