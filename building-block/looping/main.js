var input = document.getElementById('search');
var btn = document.querySelector('#btn');
var para = document.querySelector('p');
var contacts = ['vaibhav:80074714', 'home:96731849', 'jamesbond: 007', 'johndoe:100']

btn.addEventListener('click', search);

function search() {
    var searchEle = input.value;
    input.value = '';
    input.focus();
    for(var i = 0; i < contacts.length; i++) {
        var splitContact = contacts[i].split(':');
        if(splitContact[0] === searchEle) {
            para.textContent = `${splitContact[0]} contact number is ${splitContact[1]}`;
            break;
        } else {
            para.textContent = 'Contact not found'
        }
    }
}
