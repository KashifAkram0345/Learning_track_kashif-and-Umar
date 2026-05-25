

// // 

// function Text(event) {
//     console.log(event);
// fpara.addEventListener('click',Text)
//     fpara.textContent =
//     "Only four JavaScript lectures are left";
// }


// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click',Text)
// fpara.removeEventListener('click',Text)
let fanchor = document.getElementById("fanchor");

function Link(event) {
    console.log(event);

    event.preventDefault();

    fanchor.textContent =
    "Finally link is not open";
}

fanchor.addEventListener('click', Link);