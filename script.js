function closeForm() {
    document.querySelector('.form-container').style.display = 'none';
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');

    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';

    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email address';
        return false;
    }

    if (!isValidPhone(phone)) {
        phoneError.textContent = 'Invalid phone number';
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
}

function isValidPhone(phone) {
    // Your phone validation logic here
    return /^\d{10}$/.test(phone);
}
