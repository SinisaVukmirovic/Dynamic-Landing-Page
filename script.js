// DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show time functionality
function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();

    // setting AM or PM dependant on time of day
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // functionality for 12 hour format
    hours = hours % 12 || 12;

    // Output time
    // time.innerHTML = `${hours}<span>:</span>${mins}<span>:</span>${secs}`
    time.innerHTML = `${hours}:${addZero(mins)}:${addZero(secs)} ${amPm}`;

    // calling showtime function every second
    setTimeout(showTime, 1000);

}

// Functionality for adding zeros infront on digit time values
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0': '') + n;
}

//  Functionality for changing background and greeting depending on day period
function setBgAndGreet() {
    let today = new Date();
    // let today = new Date(2019, 6, 13, 22, 22);

    let hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = 'url("img/morning.jpg")';
        greeting.textContent = 'Good morning, ';
    }
    else if (hour < 18) {
        document.body.style.backgroundImage = 'url("img/afternoon.jpg")';
        greeting.textContent = 'Good afternoon, ';
    }
    else {
        document.body.style.backgroundImage = 'url("img/evening.jpg")';
        greeting.textContent = 'Good evening, ';
        document.body.style.color = '#eee';
        time.style.borderColor = '#eee';
    }
}

// Functionality for name and focus values and storing in localstorage
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[enter name]';
    }
    else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set name and set focus functionality on enter keypress or blur
function setName(e) {
    if (e.type === 'keypress') {
        // checking that enter key is pressed
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            // calling blur when enter key is press so that it prevents going to new line
            name.blur();
        }
    }
    else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        // checking that enter key is pressed
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            // calling blur when enter key is press so that it prevents going to new line
            focus.blur();
        }
    }
    else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[enter focus]';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set name functionality on enter keypress or blur
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Call functions
showTime()
setBgAndGreet();
getName();
getFocus();