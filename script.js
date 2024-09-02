// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Basic validation
    if (name === '' || email === '' || subject === '' || message === '') {
        formMessage.textContent = 'All fields are required.';
        formMessage.style.color = '#d9534f';
        return;
    }

    // Additional email validation (basic check)
    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = '#d9534f';
        return;
    }

    // Simulate successful submission
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    formMessage.style.color = '#5bc0de';

    // Clear form fields (optional)
    document.getElementById('contactForm').reset();
});

// Basic email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}