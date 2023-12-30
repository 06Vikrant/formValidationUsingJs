const form = document.getElementById("form"); 
const username = document.getElementById("username"); 
const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const confirmPassword = document.getElementById('confirm-password'); 
const failureIcon = document.getElementsByClassName('failure-icon');
const successIcon = document.getElementsByClassName('success-icon');


form.addEventListener("submit", e => {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

     // submit to the server if the form is valid
    if (isFormValid) {

    }
    // formReset();

})

let isRequired = value => value === '' ? false : true;

let isBetween = (length, min, max) => length < min || length > max ? false : true;

// function that show the error message
const setError = (input, message) => {
    // get the form-field element
    const inputControl = input.parentElement;
    console.log(inputControl);
    // add the error class
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    // console.log(inputControl);
    // show the error message
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = message;
}

// function that show the success message

const setSuccess = input => {
    const inputControl = input.parentElement;
    console.log(inputControl);

    inputControl.classList.remove('error');
    inputControl.classList.add('success');

    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
}

// To check the email is valid
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// To check if a password is strong
const isPasswordSecure = password => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

// 1. check if username match the given regex
const checkUsername = () => {
    let valid = false;
    const min = 3,
     max = 25;
    const usernameValue = username.value.trim();

    if (!isRequired(usernameValue)) {
        setError(username, 'Username cannot be blank.')
        failureIcon[0].style.opacity = '1';
    } else if (!isBetween(usernameValue.length, min, max)) {
        setError(username, `Username must be between ${min} and ${max} characters.`);
        failureIcon[0].style.opacity = '1';
    } else {
        setSuccess(username);
        successIcon[0].style.opacity = '1';
        failureIcon[0].style.opacity = '0';
        valid = true;
    }
    return valid;
}

// 2. Check emial validity
const checkEmail = () => {
    let valid = false;
    const emailValue = email.value.trim();

    if (!isRequired(emailValue)) {
        setError(email, 'Email cannot be blank.')
        failureIcon[1].style.opacity = '1';
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email');
        failureIcon[1].style.opacity = '1';
    } else {
        setSuccess(email);
        successIcon[1].style.opacity = '1';
        failureIcon[1].style.opacity = '0';
        valid = true;
    }
    return valid;
}

// 3. check if password is secure enough or not using regEx()  
const checkPassword = () => {
    let valid = false;
    const passwordValue = password.value.trim();

    if (!isRequired(passwordValue)) {
        setError(password, 'Password cannot be blank.')
        failureIcon[2].style.opacity = '1';
    } else if (!isPasswordSecure(passwordValue)) {
        setError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        failureIcon[2].style.opacity = '1';
    } else {
        setSuccess(password);
        successIcon[2].style.opacity = '1';
        failureIcon[2].style.opacity = '0';
        valid = true;
    }
    return valid;
}

// 4. check confirm password matches password
const checkConfirmPassword = () => {
    let valid = false;
    const confirmPasswordValue = confirmPassword.value.trim();
    const passwordValue = password.value.trim();

    if (!isRequired(confirmPasswordValue)) {
        setError(confirmPassword, 'Please enter the password again');
        failureIcon[3].style.opacity = '1';
    } else if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Confirm password does not match');
        failureIcon[3].style.opacity = '1';
    } else {
        setSuccess(confirmPassword);
        valid = true;
        successIcon[3].style.opacity = '1';
        failureIcon[3].style.opacity = '0';
    }
    return valid;
}

// Add Instant feedback feature
// using Debounce function is =>
// a debounce function makes sure that your code is only triggered once per user input

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirmPassword':
            checkConfirmPassword();
            break;
    }
}));


