// by hover the word mouse , position x, y it inside the span tag


function event_function(event){
     let span = document.getElementById("show_position");
     span.innerHTML = event.pageX, event.pageY;
}