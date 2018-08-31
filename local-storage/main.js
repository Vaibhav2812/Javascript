var setBtn = document.querySelector('#set');
var getBtn = document.querySelector('#get');
var user = document.querySelector('#set-username');

function setUserName() {
  var myName = prompt('Please eneter your name');
  if (!myName) {
    return;
  }
  localStorage.setItem('name', myName);
  user.textContent = 'Cool ' + myName;
}

const _getUsername = () => {
  const name = localStorage.getItem('name');
  user.textContent = 'got ' + name;
}

setBtn.onclick = function() {
  setUserName();
};

getBtn.onclick = function() {
  _getUsername();
}