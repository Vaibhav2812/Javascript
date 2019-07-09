
const str = 'afewreociwddwjej';
function findRepeat(string) {
    const arr = string.split('');
    const hash = new Map();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (hash.get(arr[i] === undefined)){
            hash.set(arr[i], true);
        } else {
            const value = hash.get(arr[i]);
                hash.set(value, !value)
        }
    }
    hash.forEach((v, k) => {
        if (!v)
            result.push(k);
    });
    return result;
}

console.log(findRepeat(str));


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
  
  const tab = document.getElementById('myTable');
  tab.addEventListener('click', (cell) => {
    console.log('======>', this.id)
  })
  
  //not able to overide property in a class using property descriptor
  class Person {
    constructor(name) {
      this.name = name;
      console.log(this.name)
      Object.defineProperty(this, 'name', {
        value: 'Legend',
        writable: false,
        configurable: false
      })
    }
  }
  let person = new Person();
  person.name = 'vaibhav';
  console.log(person);
  person.name = 'Dattya';
  console.log(person);
  
  //reverse  string
  function getReverse(str) {
    var revStr = '';
    for (var i = 0; i < str.length; i++) {
      revStr = str[i] + revStr;
    }
    return revStr;
  }
  console.log(getReverse('JAVASCRIPT'));
  function getReverse2(str) {
    var revStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      var revStr = revStr + str[i];
    }
    return revStr;
  }
  console.log(getReverse2('JAVASCRIPT'));
  
  //How to find common elements only between 2 arrays;
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [4, 5, 6, 7, 8];
  let array3 = arr1.filter((item) => arr2.indexOf(item) != -1);
  console.log(array3);
  
  //find prime numbers
  function isPrime(num) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  }
  function primeList(N) {
    var list = [];
    N.forEach((item) => {
      if (isPrime(item)) {
        list.push(item);
      }
    })
    return list;
  }
  let arr = [1, 5, 6, 8, 77, 88, 1, 2, 6, 99, 12, 02, 456, 811, 1565];
  let primeNumbers = primeList(arr);
  console.log(primeNumbers);
  
  //factorial
  function getFactorial(num) {
    var f = 1;
    for (var i = 1; i <= num; i++) {
      f *= i
    }
    return f;
  }
  console.log(getFactorial(5));
  
  //probem
  let sortArr = [1,2,[1,2]];
  console.log(sortArr.sort().join('__'));  
  
  //find longest word in string
  //ex: 'javascript is awseone and nice //javscript
  
  let word = 'javascript is awesomr and nice';
  word = word.split(' ').sort((a,b) => a.length - b.length);
  console.log('===========>', word[word.length-1]);
  
  