    document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Toggle menu visibility on small screens
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Form validation
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name === '' || email === '' || message === '') {
            formResponse.textContent = 'Please fill out all fields.';
            formResponse.style.color = 'red';
        } else if (!validateEmail(email)) {
            formResponse.textContent = 'Please enter a valid email address.';
            formResponse.style.color = 'red';
        } else {
            // Simulate form submission
            formResponse.textContent = 'Thank you for your message!';
            formResponse.style.color = 'green';
            form.reset();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Prevent XSS attacks by sanitizing user inputs
    function sanitizeInput(input) {
        const element = document.createElement('div');
        element.innerText = input;
        return element.innerHTML;
    }
});
