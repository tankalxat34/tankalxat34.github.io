const labels = [
    'Официальный сайт',
    'Добро пожаловать!',
    'git push origin develop:master',
    'Добро пожаловать на мой сайт!',
    'Hello world!'
]
const id = 'rnd-label1'


function rnd(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

function rndSpan(id=id) {
    globalThis.document.getElementById(id).textContent = labels[rnd(0, labels.length - 1)];
}

window.onload = () => {
    rndSpan(id)
}