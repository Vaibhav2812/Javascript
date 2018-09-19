var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var list = document.querySelector('ul');
var years = document.querySelector('#year');
var months = document.querySelector('#month');
var selectedMonth = document.querySelector('h1');
var month;
var days;
var year;
var startYear = 1900;
months.onchange = function () {
    month = months.value;
    days = getDays(month, year);
    createCaledar(days, month);
}

years.onchange = function () {
    year = years.value;
    days = getDays(month, year);
    createCaledar(days, month);
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

function getDays(m, y) {
    days = 31;
    if (m === 'Feb') {
        if (y % 4 === 0) {
            days = 29
        } else {
            days = 28;
        }
    } else if (m === 'Apr' || m === 'Jun' || m === 'Sep' || m === 'Nov') {
        days = 30;
    }
    return days;
}
const createYear = (sy) => {
    const currentYear = new Date().getFullYear();
    years.innerHTML = '';
    while (sy <= currentYear) {
        var options = document.createElement('option');
        options.textContent = sy;
        years.appendChild(options);
        sy++;
    }
}

const createMonth = (m) => {
    months.innerHTML = '';
    for (var i = 0; i < m.length; i++) {
        var options = document.createElement('option');
        options.textContent = m[i];
        months.appendChild(options);
    }
}
createCaledar(31, 'january');
createYear(startYear);
createMonth(monthList);
