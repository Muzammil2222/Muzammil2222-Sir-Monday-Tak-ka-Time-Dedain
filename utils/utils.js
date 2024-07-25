
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { 
    getFirestore,
    doc,
    setDoc,
    getDoc,
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import { 
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

   const firebaseConfig = {
    apiKey: "AIzaSyCQYCStbteH-TbUnvNIFZ6uiS2PmqKHAdU",
    authDomain: "eng-venture-409614.firebaseapp.com",
    projectId: "eng-venture-409614",
    storageBucket: "eng-venture-409614.appspot.com",
    messagingSenderId: "264666422274",
    appId: "1:264666422274:web:4a0d9ac509bc542e069b1b",
    measurementId: "G-VNJSLQFBDR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {
    auth,
    db,
    storage, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    ref,
    uploadBytes,
    getDownloadURL,
    signOut,
    getDoc,
  };

