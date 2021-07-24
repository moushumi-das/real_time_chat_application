const e = require("cors");

const socket = io()
let textarea = document.querySelector('#textarea')

let name;
do {
    name = prompt('please enter your name:')


} while (!name)

textarea.addEventListener('keyup', () => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})