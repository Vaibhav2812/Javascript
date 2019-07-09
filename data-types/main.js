//numbers

let number = 12.36;
let stringNum = '12.36'
console.log(number.toFixed(1)); //12.4
console.log(isFinite(stringNum)); //true
console.log(parseInt('12px0')); //12

function readNumber() {
    let num = prompt('please enter number', '0');
    if (isFinite(num)) {
        alert('read number: ' + num);
    } else {
        alert('please enter a valid number')
    }
}
readNumber();

function isInfiniteLoop() {
    let i = 0;
    while (Math.floor(i) != 10) {
        i += 0.2;  
    }
}
isInfiniteLoop(); // wihhout use of Math.floor it will never match value;