// Get the elements for the login and signup forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

const toSignup = document.getElementById('to-signup');
const toLogin = document.getElementById('to-login');

// Initially show the login form
loginForm.classList.add('active');

// Function to show login form
function showLoginForm() {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
}

// Function to show signup form
function showSignupForm() {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
}

// Event listeners for switching forms
toSignup.addEventListener('click', showSignupForm);
toLogin.addEventListener('click', showLoginForm);



