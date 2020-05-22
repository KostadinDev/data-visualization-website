import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyADwvypMpeKPqPE6nidTpkFb8X7H8ylOvc",
    authDomain: "e-comdb-48fcb.firebaseapp.com",
    databaseURL: "https://e-comdb-48fcb.firebaseio.com",
    projectId: "e-comdb-48fcb",
    storageBucket: "e-comdb-48fcb.appspot.com",
    messagingSenderId: "147526326411",
    appId: "1:147526326411:web:51f6717d63773511779c8e",
    measurementId: "G-2ET05V3MG9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)

        }

        return userRef;
    }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
