let username = document.getElementById('username');
let password = document.getElementById('password');
const login = document.getElementById('login');
const cancel = document.getElementById('cancel');
const form = document.getElementById('form');
const inputVal = document.querySelectorAll('input');
const container = document.getElementsByClassName('container')

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
        warning(username, 'fill in la dulu kalau ya pon');
        warning(password, 'fill in la dulu kalau ya pon');
    } else if (userVal.indexOf(' ') >= 0 || passVal.indexOf(' ') >= 0) {
        warning(username, 'awat ada space');
        warning(password, 'awat ada space');
    } else if (regexUser.test(userVal) != true || regexPass.test(passVal) != true) {
        error(username, 'tak sama pon dgn database');
        error(password, 'tak sama pon dgn database');
    } else {
        success(username, 'mntp, tunggu sat');
        success(password, 'mntp, tunggu sat');
        setTimeout(() => {
            container.innerHTML = `
            
            `
        }, 2000);
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
        inputVal[i].style.border = '1px solid white';
        responseText[i].innerText = '';
    }
}

function error(input, message) {
    const formControl = input.parentElement;
    const responseText = formControl.querySelector('.response');
    responseText.innerText = message;
    formControl.className = 'form-control error';
    input.style.background = 'var(--alert)';
}

function warning(input, message) {
    const formControl = input.parentElement;
    const responseText = formControl.querySelector('.response');
    responseText.innerText = message;
    formControl.className = 'form-control warning';
    input.style.background = 'var(--warning)';
}

function success(input, message) {
    const formControl = input.parentElement;
    const responseText = formControl.querySelector('.response');
    responseText.innerText = message;
    formControl.className = 'form-control success';
    input.style.background = 'var(--success)';
}
