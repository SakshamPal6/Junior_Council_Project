const containerr = document.querySelector('.containerr');
const signupButton = document.querySelector('.signup-sectionn header');
const loginButton = document.querySelector('.login-sectionn header');
const loginButton2 = document.querySelector('.login-sectionn #loginForm .btn0 ')
const openSignupPopup = document.getElementById('openSignupPopup');
const popupContainerr = document.getElementById('popupContainerr');
const overlay = document.getElementById('overlayy');
const userIcon = document.getElementById('userIcon');
const log = document.querySelector('login-sectionn')

// Default email addresses
const googleEmail = "default_google@gmail.com";
const appleEmail = "default_apple@icloud.com";

// Event listener to open the signup popup
openSignupPopup.addEventListener('click', () => {
    popupContainerr.style.display = 'block';
    overlay.style.display = 'block';
    console.log('Signup popup opened');
});

// Event listener to close the popup and overlay when clicking on the overlay
overlay.addEventListener('click', () => {
    popupContainerr.style.display = 'none';
    overlay.style.display = 'none';
    console.log('Popup and overlay closed');
});

// Event listener to switch to the login section
loginButton.addEventListener('click', () => {
    containerr.classList.add('active');
    console.log('Switched to login section');
});

// Event listener to switch to the signup section
signupButton.addEventListener('click', () => {
    containerr.classList.remove('active');
    console.log('Switched to signup section');
});

// Event listener to handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName: fullName, email: email, password: password })
    }).then(response => response.json()).then(data => {
        if (data.success) {
            console.log('Signup successful, switching to login section');
            // Automatically switch to the login section
            containerr.classList.add('active');
            document.getElementById('loginEmail').value = email; // Prefill the login email field
        } else {
            alert('Signup failed');
        }
    });
});

// Event listener to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    }).then(response => response.json()).then(data => {
        if (data.success) {
            console.log('Login successful, closing popup');
            // Close the popup and overlay
            popupContainerr.style.display = 'none';
            overlay.style.display = 'none';
            openSignupPopup.style.display = 'none';
            userIcon.style.display = 'block';
        } else {
            alert('Login failed');
        }
    });
});

function forgotPassword() {
    alert("Forgot password clicked!");
}

// Event listeners for "Use Google" and "Use Apple" buttons in the signup section
document.querySelector('.signup-sectionn .social-buttons button:nth-child(1)').addEventListener('click', () => {
    document.getElementById('signupEmail').value = googleEmail;
    console.log('Google email set in signup form');
});

document.querySelector('.signup-sectionn .social-buttons button:nth-child(2)').addEventListener('click', () => {
    document.getElementById('signupEmail').value = appleEmail;
    console.log('Apple email set in signup form');
});

// Event listeners for "Use Google" and "Use Apple" buttons in the login section
document.querySelector('.login-sectionn .social-buttons button:nth-child(1)').addEventListener('click', () => {
    document.getElementById('loginEmail').value = googleEmail;
    console.log('Google email set in login form');
});

document.querySelector('.login-sectionn .social-buttons button:nth-child(2)').addEventListener('click', () => {
    document.getElementById('loginEmail').value = appleEmail;
    console.log('Apple email set in login form');
});

document.getElementById('signup-button1').addEventListener('click', function() {
    alert("Succesfully signed in now click on login button");
});

loginButton2.addEventListener('click', () => {
    popupContainerr.style.display = 'none';
    overlay.style.display = 'none';
    console.log('Login button clicked, popup closed');
    alert("Succesfully logged in");
});
