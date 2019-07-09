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

