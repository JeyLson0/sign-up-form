
/* Input border validation */
let inputElement = document.querySelectorAll(".input-element")
inputElement.forEach(input => {
    input.addEventListener("input", e => {
        if (e.target.value.length == 0) {
            input.classList.remove('val');
            input.classList.add('empty')
        }
        if (e.target.value.length > 0) {
            input.classList.remove('empty');
            input.classList.add('val')
        }
    })
});   

/* First Name Validation */
let nameRegex = /^[a-zA-z ?]+$/g;
let fNameErrMsg = document.createElement("div")
fNameErrMsg.textContent = '*Invalid Content'
fNameErrMsg.classList.add('err-code')
let fName = document.querySelector("#fName");
let fNameContainer = document.querySelector("#fName-container")
fName.addEventListener("input", e => {

    if(nameRegex.test(e.target.value)){
        if (fNameContainer.contains(fNameErrMsg)) {
            fNameContainer.removeChild(fNameErrMsg);
        }
        return;
    }
    if(!nameRegex.test(e.target.value)){
        fNameContainer.appendChild(fNameErrMsg);
        if (e.target.value.length == 0) {
            fNameContainer.removeChild(fNameErrMsg);
        } 
        return
    }
})

/* Last Name Validation */
let lNameErrMsg = document.createElement("div")
lNameErrMsg.textContent = '*Invalid Content'
lNameErrMsg.classList.add('err-code')
let lName = document.querySelector("#lName");
let lNameContainer = document.querySelector("#lName-container")
lName.addEventListener("input", e => {

    if(nameRegex.test(e.target.value)){
        if (lNameContainer.contains(lNameErrMsg)) {
            lNameContainer.removeChild(lNameErrMsg);
        }
        return;
    }
    if(!nameRegex.test(e.target.value)){
        lNameContainer.appendChild(lNameErrMsg);
        if (e.target.value.length == 0) {
            lNameContainer.removeChild(lNameErrMsg);
        } 
        return
    }
})

/* Password Validation */
const password = document.querySelector('#user-password')
let passContainer = document.querySelector('#pass-container')
let passErr = document.createElement('div')
passErr.textContent = `(min 8 characters, 1 lower case, 1 upper case, 1 special symbol, 1 digit)`
let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g; 
passErr.classList.add('err-code')

password.addEventListener("change", e => {
    
    if (passRegex.test(e.target.value)) {
        if(passContainer.contains(passErr)){
            passContainer.removeChild(passErr);
        }
        return;
    }
    if (!passRegex.test(e.target.value)) {
        passContainer.appendChild(passErr);
        return;
    } 
    
})

/* Password Match Validator */
const confirmPass = document.querySelector('#confirm-pass');
let confirmPassContainer = document.querySelector('#confirm-pass-container')
let confirmPassErr = document.createElement('div')
confirmPassErr.textContent = `*Password does not match`;
confirmPassErr.classList.add('err-code')

confirmPass.addEventListener("change", e => {
    if (e.target.value.length > 0) {
        confirmPass.classList.remove('empty');
    }
    if (e.target.value == password.value) {
        confirmPass.classList.add('valid');
        confirmPass.classList.remove('invalid');
        if (confirmPassContainer.contains(confirmPassErr)){
            confirmPassContainer.removeChild(confirmPassErr);
        }
    }
    if (e.target.value != password.value) {
        confirmPass.classList.add('invalid');
        confirmPassContainer.appendChild(confirmPassErr);
        confirmPass.classList.remove('valid');
        if (e.target.value.length == 0) {
            confirmPass.classList.add('empty');
            confirmPassContainer.removeChild(confirmPassErr);     
        }
    }
})