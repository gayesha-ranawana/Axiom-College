document.addEventListener('DOMContentLoaded', function() {
    // Generate random numbers for the CAPTCHA
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const captchaAnswer = num1 + num2;
    
    // Display the numbers in the CAPTCHA question
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    
    // Form validation
    const contactForm = document.getElementById('collegeContactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // First Name validation
        const firstName = document.getElementById('firstName').value.trim();
        if (firstName === '') {
            document.getElementById('firstNameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('firstNameError').style.display = 'none';
        }
        
        // Last Name validation
        const lastName = document.getElementById('lastName').value.trim();
        if (lastName === '') {
            document.getElementById('lastNameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('lastNameError').style.display = 'none';
        }
        
        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }
        
        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('messageError').style.display = 'none';
        }
        
        // CAPTCHA validation
        const captchaInput = document.getElementById('captcha').value.trim();
        if (captchaInput === '' || parseInt(captchaInput) !== captchaAnswer) {
            document.getElementById('captchaError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('captchaError').style.display = 'none';
        }
        
        // If the form is valid, show success message
        if (isValid) {
            contactForm.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            
            // In a real application, you would send the form data to the server here
            console.log('Form submitted:', {
                firstName,
                lastName,
                email,
                phone: document.getElementById('phone').value.trim(),
                message
            });
        }
    });
});