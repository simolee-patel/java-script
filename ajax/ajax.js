console.log("ajax is here");



// using get method
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'info.txt', 'true');

// xhr.onprogress = function () {
//     console.log("processing...");
// }
// xhr.onload = function () {
//     if (this.status === 200) {
//         console.log(this.responseText);
//     }
//     else {
//         console.log("error...");
//     }
// }
// xhr.send();

// let fetchBtn = document.getElementById('fetchBtn');


//using post method
fetchBtn.addEventListener('click', clicked);
function clicked() {
    console.log("clickd");
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '	http://dummy.restapiexample.com/api/v1/create', 'true');
    xhr.getResponseHeader('Content-type', 'application/json');


    xhr.onprogress = function () {
        console.log("progress");
    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("error");
        }
    }
    params = `{ "name": "test", "salary": "123", "age": "23" }`;
    xhr.send(params);
}





//write data into dom.
let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click', popHandler);
function popHandler() {
    console.log("clickd");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', 'true');
    xhr.getResponseHeader('Content-type', 'application/JSON');


    xhr.onprogress = function () {
        console.log("progress");
    }
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].title}</li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("error");
        }
    }
    xhr.send();
    console.log("done here.....")
}

