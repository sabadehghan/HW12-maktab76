// the parent of elements to watch for events
// attach the event listener to the parent element
// use event.target to select the target element
// when a button is clicked, the handler function is called with an argument and checks
// whether the class name is the same as buttonClass, if the name is equal to
// buttonClass, buttonClass is printed, otherwise it gives the message "click!" to print

let div = document.getElementById("buttons");
div.addEventListener("click", function (event) {
  if (event.target.className == "buttonClass") {
    alert("buttonClass");
  } else {
    alert("click!");
  }
});
