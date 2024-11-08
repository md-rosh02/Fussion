// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Optionally import getAnalytics if you want to use analytics (not necessary for Firebase Authentication)
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWeeMcle1gXxtKbvC3sB6d3LRrqHXpJxE",
  authDomain: "x-learn-1126e.firebaseapp.com",
  projectId: "x-learn-1126e",
  storageBucket: "x-learn-1126e.appspot.com", // Corrected the storageBucket URL
  messagingSenderId: "649079299996",
  appId: "1:649079299996:web:e9dc40f374f8e3cc217259",
  measurementId: "G-F9KP5DKKRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Optionally initialize Firebase Analytics if you plan to use it
const analytics = getAnalytics(app);

// Export the auth object so it can be used in other files
export { auth };
