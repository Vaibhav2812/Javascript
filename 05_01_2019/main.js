//object compputing
//variable or expression as object properrty then need to use square.
function objectify(key, value) {
    let obj = {};
    obj[key] = value;
    return obj;
}
console.log(objectify('name', 'vaibhav'));

function objectify1(key, value) {
    return {
        [key]: value
    }
}
var surnameKey = 'surname';
console.log(objectify1(surnameKey, 'patil'));

let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    size: {
        height: 32,
        weight: 66
    }
}
//Object key
for (let key in user) {
    console.log(key);
    console.log(user[key]);
}
//ordered object

let code = {
    '41': 'Germany',
    '1': 'USA',
    '91': 'India'
}
for (let key in code) {
    console.log(key);
    console.log(code[key]);
}

//assign const value to object
const _user = {
    name: 'John'
}
_user.name = 'Doe'; //its allowed
// _user = {
//     name: 'Patil'
// }  //it will not allowed
console.log(_user);

//property descriptor
let descriptor = Object.getOwnPropertyDescriptor(_user, 'name');
console.log(descriptor);
Object.defineProperty(user, 'name', {
    writable: false
})
user.name = 'cool';   //ERROR: not able to override

//object cloning
let clone = {};
for (let key in user) {
    clone[key] = user[key];
}
console.log(clone); //{age: 30 ,isAdmin: true ,name: "John"}

//Object.assign
Object.assign(user, {lang: 'en'});
console.log(user); //{age: 30 ,isAdmin: true ,lang: "en",name: "John"}

//clone object using Objet.assign
clone = Object.assign({}, user);
console.log(clone);  //{age: 30 ,isAdmin: true ,lang: "en",name: "John"}