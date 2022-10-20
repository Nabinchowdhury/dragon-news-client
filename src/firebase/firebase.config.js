// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4iE2dmfale0PMUsuS_u-ik3ejXCI605I",
    authDomain: "dragon-news-client-ee877.firebaseapp.com",
    projectId: "dragon-news-client-ee877",
    storageBucket: "dragon-news-client-ee877.appspot.com",
    messagingSenderId: "912779224364",
    appId: "1:912779224364:web:e86dfff27ce252eb7f7889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app