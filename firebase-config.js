// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyAlMyO9iybb7Zc3-JWpaJTOU6mp7dVZw7A",
    authDomain: "taher-online.firebaseapp.com",
    databaseURL: "https://taher-online-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "taher-online",
    storageBucket: "taher-online.firebasestorage.app",
    messagingSenderId: "254196950669",
    appId: "1:254196950669:web:ea7dc25e29e459e791e4c4",
    measurementId: "G-W288VV18S2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();