// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQS-qGmDOqsRyWeb2ypva_XDwvvTsNGr8",
  authDomain: "mohamaya-admin-app.firebaseapp.com",
  projectId: "mohamaya-admin-app",
  storageBucket: "mohamaya-admin-app.appspot.com",
  messagingSenderId: "826582476022",
  appId: "1:826582476022:web:e275f6dcb857c867d638d7"
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
