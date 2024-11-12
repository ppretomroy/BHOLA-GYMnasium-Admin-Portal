// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDQZmIQGVJFL9IXjCQaDf8dG0xJnrs8Z8w",
  authDomain: "bhola-gymnasium-server.firebaseapp.com",
  projectId: "bhola-gymnasium-server",
  storageBucket: "bhola-gymnasium-server.firebasestorage.app",
  messagingSenderId: "881846257453",
  appId: "1:881846257453:web:58376f154b42c4d21475a4;
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});
