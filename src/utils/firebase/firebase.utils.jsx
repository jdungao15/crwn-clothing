import {initializeApp} from 'firebase/app';
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged

} from 'firebase/auth';
import {
   getFirestore, //initialized and retrieve a reference to database
   doc, //create a reference to specific document within a collection of
   // database
   getDoc, //get specific document
   setDoc, //write or overwrite to a specific data
   collection,
   writeBatch,
   query,
   getDocs
} from 'firebase/firestore';

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
});

// Configuration
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();


// add collection of products to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = collection(db, collectionKey);
   const batch = writeBatch(db);

   objectsToAdd.forEach(obj => {
      const docRef = doc(collectionRef, obj.title.toLowerCase());
      batch.set(docRef, obj)
   })

   await batch.commit();
   console.log('done');
}

// Retrieve collection of products from firestore
export const getCategoriesAndDocuments = async () => {
   const collectionRef = collection(db, 'categories');
   const q = query(collectionRef); //return all the documents in the collection
   const querySnapshot = await getDocs(q); //
   const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
   }, {});

   return categoryMap;

}


// Create User Document
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
   if (!userAuth) return;

   const userDocRef = doc(db, 'users', userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);

   if (!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
         });
      } catch (err) {
         console.log('error creating the user', err.message);
      }
   }

   return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);