import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBC0GZ1MIbez0HpBSrb3tlJDOL1QVJgvis",
    authDomain: "crown-db-42558.firebaseapp.com",
    databaseURL: "https://crown-db-42558.firebaseio.com",
    projectId: "crown-db-42558",
    storageBucket: "crown-db-42558.appspot.com",
    messagingSenderId: "13086627120",
    appId: "1:13086627120:web:a24b879ead22c4b159e4f5",
    measurementId: "G-828EZGEQPS"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) {
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } 
      catch(err){
        console.log(err);
      }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(item => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, item);
    });
    return batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();
      return{
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((acc, collection) => {
      acc[collection.title.toLowerCase()] = collection;
      return acc;
    }, {})
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

