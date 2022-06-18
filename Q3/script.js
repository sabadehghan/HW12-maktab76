// add the event click listeners for div 
// add the event click listeners for button 
// both event print their own name node 




let div = document.getElementsByClassName("cta_container");
let button = document.getElementsByClassName("cta_button");
let p = document.getElementsByTagName("p");
 div.addEventListener("click",(e)=>{
        p.innerHTML = e.target.tagName;
 },false);