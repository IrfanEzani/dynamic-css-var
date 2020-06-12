let username = document.getElementById('username');
let password = document.getElementById('password');
const login = document.getElementById('login');
const cancel = document.getElementById('cancel');
const form = document.getElementById('form');
const inputVal = document.querySelectorAll('input');
const container = document.querySelector('#container');

let regexUser = /^irfanezani$/;
let regexPass = /^wonghenhau$/;


login.addEventListener('click', e => {
    e.preventDefault();
    check();
});


cancel.addEventListener('click', e => {
    e.preventDefault();
    uncheck();
})

function check() {  
    const userVal = username.value;
    const passVal = password.value;
    if (userVal == '' && passVal == '') {
        warning(username, 'Please fill in the form');
        warning(password, 'Please fill in the form');
    } else if (userVal.indexOf(' ') >= 0 || passVal.indexOf(' ') >= 0) {
        warning(username, 'Spaces included');
        warning(password, 'Spaces included');
    } else if (regexUser.test(userVal) != true && regexPass.test(passVal) != true) {
        error(username, 'Username not found');
        error(password, 'Password not found');
    } else {
        success(username, 'Username found, please wait for a while');
        success(password, 'Password match, please wait for a while');
        setTimeout(() => {
            console.log('nice');
            container.innerHTML = '';
            container.innerHTML = `
            <a class="centre" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Welcome home, president.</a>
            `;
        }, 1000);
        return;
    }
}

function uncheck() {
    const formControl = document.querySelectorAll('.form-control');
    const responseText = document.querySelectorAll('.response');
    formControl.className = 'form-control';
    username.value = '';
    password.value = '';
    for (var i = 0; i < inputVal.length; i++) {
        inputVal[i].style.background = 'white';
        inputVal[i].style.borderColor = 'gray';
        responseText[i].innerText = '';
    }
}

function error(input, message) {
    const formControl = input.parentElement;
    const responseText = formControl.querySelector('.response');
    responseText.innerText = message;
    formControl.className = 'form-control error';
    input.style.borderBottomColor = 'var(--alert)';
}

function warning(input, message) {
    const formControl = input.parentElement;
    const responseText = formControl.querySelector('.response');
    responseText.innerText = message;
    formControl.className = 'form-control warning';
    input.style.borderBottomColor = 'var(--warning)';
}

function success(input, message) {
    const formControl = input.parentElement;
    const responseText = formControl.querySelector('.response');
    responseText.innerText = message;
    formControl.className = 'form-control success';
    input.style.borderBottomColor = 'var(--success)';
}

