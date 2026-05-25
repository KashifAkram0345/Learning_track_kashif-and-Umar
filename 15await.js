// // async function getData() {
// //   setTimeout(function() {
// //     console.log("I am inside set Timeout block")
// //   }, 3000);
// // }

// // let output = getData();
// //await - ?
// //fetch API

// async function getData() {
//     try {
//         // get request - async
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
//         // parse json - async
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// getData();



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }),
    headers: myHeaders,
};

async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}

async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("post data response: ", data);
}

postData();