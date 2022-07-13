const input = document.getElementsByTagName('input')[0];
const text = document.getElementsByTagName('p')[0];
const buttom = document.getElementsByTagName('button')[0];

input.addEventListener('input', (event) => {
    const pass = event.target.value;
   
    if (pass.length < 8) {
        text.innerText = 'max 8 symbols';
        text.classList.remove('red--password')
        buttom.disabled = true
    } else {
        text.innerText = 'password strong';
        text.classList.add('red--password')
        buttom.disabled = false
    } 
})
