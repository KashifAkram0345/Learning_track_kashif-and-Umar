
let firstDiv = document.getElementById("firstDiv");
let firstPara = document.getElementById("firstPara");
let secondDiv = document.getElementById("secondDiv");
let secondPara = document.getElementById("secondPara");


firstDiv.style.border = "3px solid black";
firstPara.style.fontWeight = "bold";

secondDiv.style.border = "2px solid red";
secondPara.style.fontSize = "18px";


secondPara.setAttribute("title", "This is second paragraph");


firstDiv.classList.add("main-box");