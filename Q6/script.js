// 1. a bubbling event can be created with the name goodbye
// 2. print clientX/clientY for a mouse event

let h1 = document.getElementById("elemId");

h1.addEventListener("click", (e) => {
  h1.textContent = "goodbye";
//   h1.textContent = e.clientX + "" + e.clientY;
let x = e.clientX;
let y = e.clientY;
console.log(x);
console.log(y);

});
