var script = document.createElement("script");  // create a script DOM node
const localStorage = window.localStorage;

if(localStorage.getItem("modded") === null) {
    localStorage.setItem("modded", "true");
} 

if(localStorage.getItem("modded") === "true") {
    script.src = "assets/js/modded.js?4e4e005077c1d4940468"; 
} else {
    script.src = "assets/js/app198e.js?4e4e005077c1d4940468"; 
}

document.head.appendChild(script);