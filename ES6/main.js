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

