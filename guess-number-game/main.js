const randomNumber = Math.floor(Math.random() * 100);
const myBtn = document.querySelector('#btn');
let previousNum = [];
myBtn.onclick = function () {
    let currentNumber = _next();
    _compare(+currentNumber);
}
const _next = () => {
    return document.getElementById('user-input').value;
}
const _compare = (current, pre) => {
    if (current === randomNumber) {
        console.log('Congratulation you won');
    } else if (current < randomNumber) {
        previousNum.push(current);
        console.log('Last guess was too Low!');
    } else {
        previousNum.push(current);
        console.log('Last guess was too high!');
    }
    console.log(previousNum);   
   let info = document.querySelector('#info');
   info.textContent = "Entered value" + previousNum.join(',');
}