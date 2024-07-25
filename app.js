// import { 
//   auth, 
//   storage, 
//   db, 
//   signOut, 
//   getDoc,
//   doc,
//   onAuthStateChanged, 
// } from "./utils/utils.js";

// const logoutBtn = document.getElementById('logout_btn');
// const loginLink = document.getElementById('login_link');
// const userImg = document.getElementById('user_img');

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       loginLink.style.display = 'none';
//       userImg.style.display = 'inline-block';
//       getUserInfo(uid);
//       // ...
//     } else {
//       window.location.href = '/auth/login/index.html'
//       loginLink.style.display = 'inline-block';
//       userImg.style.display = 'none';
//     }
//   });

//   logoutBtn.addEventListener('click', ()=>{
//     signOut(auth)
//     // .then(() => {
//     //   // Sign-out successful.
//     //   window.location.href = '/auth/login/index.html'
//     //   }).catch((error) => {
//     //     // An error happened.
//     //     });
//   });

//   function getUserInfo(uid){
//     const userRef = doc(db, 'user', uid);
//     getDoc(userRef)
//     .then((data) => {
//       console.log('userId',data.id);
//       console.log('userInfo',data.data());
//     });
//   }

import { 
  auth, 
  storage, 
  db, 
  signOut, 
  getDoc,
  doc,
  onAuthStateChanged, 
} from "./utils/utils.js";

const logoutBtn = document.getElementById('logout_btn');
const loginLink = document.getElementById('login_link');
const userImg = document.getElementById('user_img');

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    loginLink.style.display = 'none';
    userImg.style.display = 'inline-block';
    getUserInfo(uid);
  } else {
    // User is signed out
    loginLink.style.display = 'inline-block';
    userImg.style.display = 'none';
    window.location.href = '/auth/login/index.html';
  }
});

logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    // Sign-out successful
    window.location.href = '/auth/login/index.html';
  }).catch((error) => {
    // An error happened
    console.error('Sign out error:', error);
  });
});

// function getUserInfo(uid) {
//   const userRef = doc(db, 'users', uid);
//   getDoc(userRef)
//     .then((doc) => {
//       if (doc.exists()) {
//         console.log('User ID:', doc.id);
//         console.log('User Info:', doc.data());
//         userImg.src = data.data().img;
//       } else {
//         console.log('No such document!');
//       }
//     })
//     .catch((error) => {
//       console.error('Error getting document:', error);
//     });
// }

function getUserInfo(uid) {
  const userRef = doc(db, 'users', uid);
  getDoc(userRef)
    .then((doc) => {
      if (doc.exists()) {
        console.log('User ID:', doc.id);
        console.log('User Info:', doc.data());
        userImg.src = doc.data().img;  // Use doc.data() instead of data.data()
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.error('Error getting document:', error);
    });
}
