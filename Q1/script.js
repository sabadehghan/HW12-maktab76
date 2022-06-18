// for input name onchange , write a message that if the data
// was entered, print a valid message , if not, print required name.

// onchange "email input" triggers a function that copies  the text value
// from email input to email to the right of the page;

// clicking "submit" triggers a function stop form action in javascript;

// 1

let nameInp = document.getElementById("name");
nameInp.addEventListener("change", function () {
  if (nameInp.value == true) {
    alert("valid");
  } else {
    alert("required name");
  }
});

// 2
let email = document.getElementById("email");
email.addEventListener("click", () => {
  let emailAddress = document.getElementById("emailAddress");
  emailAddress.innerHTML = email.value;
});

// 3

function submit(e) {
  e.preventDefault();
}
