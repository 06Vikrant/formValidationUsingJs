// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// targeting id's 
let id = (id) => document.getElementById(id);
// targeting classes 
let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
 email = id("email"),
 password = id("password"),
 form = id("form"),
 errorMsg = classes("error"),
 successIcon = classes("success-icon"),
 failureIcon = classes("failure-icon");

//  errorMsg[0].innerHTML = "email cannot be blank"

// adding an event listener to the submit button
form.addEventListener("submit", (e) => {
    // if (id.length > 0) {
        e.preventDefault(); // prevents form submission after clicking submit button
    // }

    // trigger the engine functionality
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");

});

// engine function to handle the form submission
let engine = (id, serial, message) => {

    if (id.value.trim() === "" || id.value === null) { // removes the whitespace which helps in not submitting the form
        // message for username
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
    }
    else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

let emptyValue = () => {
    username.value = ""
    email.value = ""
    password.value = ""
}