const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        // console.log(Http.responseText)
    }
}


var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState);

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
console.log('OPENED', xhr.readyState);

xhr.setRequestHeader('DOMAIN', 'XML');

xhr.onprogress = ()=> {
console.log('LOADING',xhr.readyState);
}

xhr.onload = ()=> {
console.log('DONE', xhr.readyState);
}

xhr.onreadystatechange = ()=> {
    console.log(xhr.responseText)
}
xhr.send();

//JQUERY
$(document).ready(() => {
    const Url = 'https://jsonplaceholder.typicode.com/ts/1';
    console.log(Url);
    $('.btn').click(() => {
      $.ajax({
        url: Url,
        type: 'GET',
        success: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  })