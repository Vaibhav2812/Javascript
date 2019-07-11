// destructuring
// For the object destructuring form specifically,
//  when leaving off a var/let/const declarator, 
// we had to surround the whole assignment expression in ( ),
//  because otherwise the { .. } on the lefthand side as 
// the first element in the statement is taken to be a block statement instead of an object.

let o = {};
[o.a, o.b, o.c] = foo();
({ x: o.x, y: o.y, z: o.z } = bar());
console.log(o); //{a: 1, b: 2, c: 3, x: 4, y: 5, z: 6}

function foo() {
    return [1, 2, 3];
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var o1 = { a: 1, b: 2, c: 3};
a2 = [];
({a: a2[0], b: a2[1], c: a2[2]}= o1);
console.log(a2); // [1,2,3]

var a1 = [1,2,3];
var o2 = {};
([o2.a, o2.b, o2.c] = a1);
console.log(o2); //{a:1, b:2, c: 3}

//tagged template literals

const name= "sean";
const wishes = "Good morning";
let message = tag`Hi hello there ${name} wish you ${wishes}`;

function tag(literals, ...substitutions) {
     let result;
    substitutions.forEach((value, index) => {
        result += literals[index] + substitutions[index];
    });
    return result;
}
console.log(message);


//repeated assignment
 var {a: {x:X}, a}= {a: {x:1}};
 console.log(X); //1
 console.log(a); //{x:1}

 ({a:X, a:Y , a: [Z]} = {a: [1]});
 X.push(2);
 Y[0] = 10;
 console.log(X);
 console.log(Y);
 console.log(Z);

 //Remember: the purpose of destructuring is not just less typing,
//   but more declarative readability.

//assignment expression
var o2 = { a: 1, b:2, c: 3,d: 4};
var o3 = {a,b,c} = o2; //1,2,3
console.log(o3); //{ a: 1, b:2, c: 3,d: 4}
var a2 = [1,2,3], a,b,c,a3;
 a3 = [a,b,c] = a2;
 console.log(a3);

 //chaining destructring assignmet
({a} = {b,c} = o2);
console.log(a);