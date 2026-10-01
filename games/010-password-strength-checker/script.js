const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

const lengthCheck = document.getElementById('lengthCheck');
const upperCheck = document.getElementById('upperCheck');
const lowerCheck = document.getElementById('lowerCheck');
const numberCheck = document.getElementById('numberCheck');
const specialCheck = document.getElementById('specialCheck');

passwordInput.addEventListener('input', function() {
    const password = this.value;
    let strength = 0;
    
    // Check length
    if (password.length >= 8) {
        lengthCheck.classList.add('valid');
        lengthCheck.textContent = '✓';
        strength++;
    } else {
        lengthCheck.classList.remove('valid');
        lengthCheck.textContent = '✗';
    }
    
    // Check uppercase
    if (/[A-Z]/.test(password)) {
        upperCheck.classList.add('valid');
        upperCheck.textContent = '✓';
        strength++;
    } else {
        upperCheck.classList.remove('valid');
        upperCheck.textContent = '✗';
    }
    
    // Check lowercase
    if (/[a-z]/.test(password)) {
        lowerCheck.classList.add('valid');
        lowerCheck.textContent = '✓';
        strength++;
    } else {
        lowerCheck.classList.remove('valid');
        lowerCheck.textContent = '✗';
    }
    
    // Check number
    if (/\d/.test(password)) {
        numberCheck.classList.add('valid');
        numberCheck.textContent = '✓';
        strength++;
    } else {
        numberCheck.classList.remove('valid');
        numberCheck.textContent = '✗';
    }
    
    // Check special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        specialCheck.classList.add('valid');
        specialCheck.textContent = '✓';
        strength++;
    } else {
        specialCheck.classList.remove('valid');
        specialCheck.textContent = '✗';
    }
    
    // BUG: Strength level is off by one
    if (strength === 0) {
        strengthBar.style.width = '0%';
        strengthBar.style.backgroundColor = 'red';
        strengthText.textContent = 'Very Weak';
    } else if (strength === 1) {
        strengthBar.style.width = '20%';
        strengthBar.style.backgroundColor = 'red';
        strengthText.textContent = 'Weak';
    } else if (strength === 2) {
        strengthBar.style.width = '40%';
        strengthBar.style.backgroundColor = 'orange';
        strengthText.textContent = 'Fair';
    } else if (strength === 3) {
        strengthBar.style.width = '60%';
        strengthBar.style.backgroundColor = 'yellow';
        strengthText.textContent = 'Good';
    } else if (strength === 4) {
        strengthBar.style.width = '80%';
        strengthBar.style.backgroundColor = 'lightgreen';
        strengthText.textContent = 'Strong';
    } else if (strength === 5) {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = 'green';
        strengthText.textContent = 'Very Strong';
    }
});
