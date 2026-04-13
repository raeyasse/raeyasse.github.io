document.getElementById('enrollmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const interest = document.getElementById('interest').value;
    const session = document.getElementById('session').value;
    const card = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiry = document.getElementById('expiry').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    document.querySelectorAll('.error').forEach((e) => e.textContent = '');

    if (name === '') {
        document.getElementById('nameError').textContent = 'Please enter your full name.';
        valid = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a 10-digit phone number.';
        valid = false;
    }

    if (interest === '') {
        document.getElementById('interestError').textContent = 'Please select an option.';
        valid = false;
    }

    if (session === '') {
        document.getElementById('sessionError').textContent = 'Please select a session.';
        valid = false;
    }

    if (!/^\d{16}$/.test(card)) {
        document.getElementById('cardError').textContent = 'Please enter a valid 16-digit card number.';
        valid = false;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        document.getElementById('expiryError').textContent = 'Please enter a valid expiry date (MM/YY).';
        valid = false;
    }

    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('cvvError').textContent = 'Please enter a valid 3-digit CVV.';
        valid = false;
    }

    if (valid) {
        alert('Thank you! Your submission has been received. We will be in touch within 2-3 business days.');
        document.getElementById('enrollmentForm').reset();
    }
});