// create element script
// set attribute src cdn lodash
// print version lodash

let script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/lodash.js/4.17.21/lodash.min.js";
let version = script.src.split("/");
console.log(version);
document.body.appendChild(script);
console.log(version[5]);

// another solution 

// let script = document.createElement("script");
// script.setAttribute(
//   "src",
//   "https://cdn.jsdelivr.net/npm/lodash.js/4.17.21/lodash.min.js"
// );
// document.body.append(script);
// let version = script
//   .getAttribute("https://cdn.jsdelivr.net/npm/lodash.js/4.17.21/lodash.min.js")
//   .split("/");
// console.log(version[5]);
