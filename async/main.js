function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.slice(0, 2);
        })
        .then(result => {
            const id2 = result.find((item) => item.id === 2)
            return fetch('https://jsonplaceholder.typicode.com/todos/' + id2.id).then(d => d.json());
        })
        .then((final) => {
            console.log(final);
        })
        .catch((err) => {
            console.log(err);
        })
}

fetchData();

//create a promise from scratch.
function wait(ms) {
    return new Promise(resolve => {
        return setTimeout(resolve(ms), ms)
    })
}
console.log(wait(2000).then(res => console.log('resolved after seconds ' + res)));


// using xmlhttp request
function xmlhttpPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.onload = () => resolve(xhr.responseText);
        xhr, onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}

xmlhttpPromise().then((res) => {
    console.log(res.json());
})

//post
function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}


postData('https://jsonplaceholder.typicode.com/posts', {
    "userId": 786,
    "id": 785,
    "title": "this is title",
    "body": "lorem ipsum is somethinf"
}).then((res) => {
    console.log(res);
})

//update json
function updateData(url, data) {
    return fetch(url, {
        method: 'PUT',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => res.json())
}

updateData('https://jsonplaceholder.typicode.com/posts/1', {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
}).then(data => console.log(data));

//upload file data
function uploadFileData() {
   
}

let fileField = document.querySelector('input[type="file"]');
fileField.onchange = () => {
    let formData = new FormData();
    formData.append('username', 'abc123');
    formData.append('avatar', fileField.files[0]);
    return fetch('https://example.com/profile/avatar', {
        method: 'PUT',
        body: formData,
        mode: 'no-cors'
    }).then(res => res.json()).then(data => console.log(data));
} 
