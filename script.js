const input = document.getElementsByTagName('input')[0];
const text = document.getElementsByTagName('p')[0];
const buttom = document.getElementsByTagName('button')[0];

input.addEventListener('input', (event) => {
    const pass = event.target.value;

//отрабатывает либо буквенная, либо проверка чисел...
    if (pass.length < 8){
        text.innerText = 'min 8 symbols';
        text.classList.remove('green--password');
        buttom.disabled = true;
    } else if (!CheckingForBigLetters(pass)){
        text.innerText = 'use uppercase letters';
        buttom.disabled = true;
        text.classList.add('red--password');
    } else if (!NunNumber(pass)){
        text.innerText = 'use number';
        buttom.disabled = true;
        text.classList.add('red--password');
    } else {
        text.innerText = 'password strong';
        text.classList.add('green--password');
        buttom.disabled = false;
        text.classList.remove('red--password');
    }
})

//функция циклится и проверяет каждую букву с условием - есть ли большая буква и возвращает false
function CheckingForBigLetters(string) {
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char === char.toUpperCase()) {
            return true
        };
    }
    return false
}

//Еще один способ проверка чисел в строке

function NunNumber(myString) {
    return /\d/.test(myString);
}

//Второй способ проверка чисел в строке isNaN()

/* else if (!isNaN(pass) === false){
    text.innerText = 'use number';
    buttom.disabled = true;
    text.classList.add('red--password'); */
