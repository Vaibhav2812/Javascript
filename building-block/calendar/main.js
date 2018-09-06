var month = document.querySelector('#month');
var list = document.querySelector('ul');
var selectedMonth = document.querySelector('h1');

month.onchange = function () {
    var choice = month.value;
    var days = 31;
    if (choice === 'february') {
        days = 28;
    } else if (choice === 'april' || choice === 'june' || choice === 'september' || choice === 'november') {
        days = 30;
    }
    createCaledar(days, choice);
}

function createCaledar(days, choice) {
    list.innerHTML = '';
    selectedMonth.textContent = choice;
    for (var i = 1; i <= days; i++) {
        var listtItem = document.createElement('li');
        listtItem.textContent = i;
        list.appendChild(listtItem);
    }
}

createCaledar(31, 'january');