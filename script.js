document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    username = document.getElementById('username').value.trim();

    email = document.getElementById('email').value.trim();

    password = document.getElementById('password').value.trim();

    const isValid = true;
    let messages = [];

    if(username.length < 3){
        isValid = false;
        messages.push("Username must be 3 characters long or more");
    }

    if(!email.includes('@', '.')){
        isValid = false;
        messages.push("The email must contain and @ sign and a period .");
    }

    if(password.length < 3){
        isValid = false;
        messages.push("Password must be 3 characters long or more");
    }

    feedbackDiv.style.display = 'Block';

    if(isValid){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        const errorMessage = messages.join('<br>');
        feedbackDiv.innerHTML = errorMessage;
        feedbackDiv.style.color = '#dc3545';
    }
});