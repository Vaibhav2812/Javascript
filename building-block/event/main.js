var element = document.querySelector('h1');
var para = document.querySelector('p');
var btn = document.querySelector('button');


random = function (num) {
    return Math.floor(Math.random() * num);
}

function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
}
btn.addEventListener('click', bgChange);

var divs = document.querySelectorAll('div');
console.log(divs);
for (var i = 0; i < divs.length; i++) {
    divs[i].onclick = function (e) {
        e.target.style.backgroundColor = bgChange(e);
    };
    divs[i].ondblclick = function (e) {
        e.target.style.backgroundColor = 'transparent';
    }
}
