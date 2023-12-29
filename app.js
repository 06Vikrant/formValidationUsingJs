// ANOHTER CODE HERE

const form = document.getElementById("form"); 
const username = document.getElementById("username"); 
const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const failureIcon = document.getElementsByClassName('failure-icon');
const successIcon = document.getElementsByClassName('success-icon');


form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
    // formReset();

})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}



const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Validate the inputs
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // username check
    if (usernameValue === '') {
        setError(username, 'Username is requsired');
        failureIcon[0].style.opacity = '1';
    }else {
        setSuccess(username);
        successIcon[0].style.opacity = '1';
        failureIcon[0].style.opacity = '0';
    }
    
    // email check
    if (emailValue === '') {
        setError(email, 'Email is required');
        failureIcon[1].style.opacity = '1';
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
        failureIcon[1].style.opacity = '1';
    } else {
        setSuccess(email);
        successIcon[1].style.opacity = '1';
        failureIcon[1].style.opacity = '0';
    }

    // password check
    if (passwordValue === '') {
        setError(password, 'Password is required');
        failureIcon[2].style.opacity = '1';
    } else if (passwordValue.length < 8) {
        setError(password, 'Password cannot be less than 8 characters')
        failureIcon[2].style.opacity = '1';
    } else if (passwordValue.search(/[a-z]/) < 0) {
        setError(password, 'Password must contain at least one lowercase letter')
        failureIcon[2].style.opacity = '1';
    } else if (passwordValue.search(/[A-Z]/) < 0) {
        setError(password, 'Password must contain at least one uppercase letter')
        failureIcon[2].style.opacity = '1';
    } else if (passwordValue.search(/[0-9]/) < 0) {
        setError(password, 'Password must contain at least one number')
        failureIcon[2].style.opacity = '1';
    } else {
        setSuccess(password);
        successIcon[2].style.opacity = '1';
        failureIcon[2].style.opacity = '0';
    }
}


// EXTRA CODE

// const failureMessage = (serial) => {
    //     failureIcon[serial].style.opacity = '1';
    //     successIcon[serial].style.opacity = '0';
    // }

// const successMessage = () => {
//     successIcon[serial].style.opacity = '1';
//     failureIcon[serial].style.opacity = '0';
// }

// resetting the form after successful login
// const formReset = () => {
//     if (username.value === String(username.value) || email.value === String(email.value) || password.value === String(password.value)) {
//         username.value = '';
//         email.value = '';
//         password.value = '';
//         successIcon[0].style.opacity = '0';

//     }
// }


