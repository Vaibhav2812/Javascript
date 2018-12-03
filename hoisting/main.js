//js hoisting
function hoist() {

    a = 20;

    var b = 100;

}

hoist();

console.log(a);

/* console.log(b); */

// console.log(hoistVar) // undefined
// var hoistVar = 'The variable has been hoisted.';

function myFunc() {
    console.log('func hoist', message);
    var message = 'function hoisting';
}

myFunc();

// console.log(es6Hoist)
// let es6Hoist = 'the variable has been hoist';


//find second largest number in array;
let secondMax = () => {
    var arr = [20, 120, 111, 215, 54, 78];
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr);
}
console.log(secondMax());


let second2Max = () => {
    var fruits = ["10", "8", "20", "5"];
    var arr = fruits.map((item) => parseInt(item, 10));
    return arr.sort((a, b) => b - a)[1];
}
console.log(second2Max());

//find second smallest number in array;
let secondMin = () => {
    var arr = [20, 120, 111, 215, 54, 78];
    var min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1);
    return Math.min.apply(null, arr);
}
console.log(secondMin());

let second2Min = () => {
    var fruits = ["10", "8", "20", "5"];
    var arr = fruits.map((item) => parseInt(item, 10));
    return arr.sort((a, b) => a - b)[1];
}
console.log(second2Min());

// find repeated letter and how many times its occure in string
let getFrequency = (str) => {
    let freq = {};
    for (var i = 0; i < str.length; i++) {
      var character = str.charAt(i);
      if (freq[character]) {
        freq[character]++;
      } else {
      freq[character] = 1;
      }
    }
    return freq;
  }
  console.log(getFrequency('javascript is awesome'));
  
  //Problem 1
  for (var i = 1; i <= 5; i++) {
    let cell = document.getElementById(`cell${i}`);
    cell.addEventListener('click', () => {
      console.log(getValue(cell));
    });
  }
  
  function getValue(val) {
  return val.innerText;
  }

  const tab = document.getElementById('myTable tr');
  tab.on('click', (cell)=> {
    console.log('======>', this.id)
  })