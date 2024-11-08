// app.js

import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Function to handle user login
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
