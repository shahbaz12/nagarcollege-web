importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyDKs8ybVWeR3a5AR9DudgSK_i2vySIuBqc",
    authDomain: "web-noti-firebase.firebaseapp.com",
    databaseURL: "https://web-noti-firebase.firebaseio.com",
    projectId: "web-noti-firebase",
    storageBucket: "web-noti-firebase.appspot.com",
    messagingSenderId: "530107173584",
    appId: "1:530107173584:web:0cee85349c5c0d6b62acd5",
    measurementId: "G-9HNN4JRSL9"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();