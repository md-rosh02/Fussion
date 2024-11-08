// login.js

// Import the loginUser function from app.js
import { loginUser } from './app.js';

// Get form and error message elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Handle login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Call loginUser function from app.js
    const { success, message, user } = await loginUser(email, password);

    if (success) {
        // Successful login
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        // Display error message
        errorMessage.textContent = message;
    }
});
