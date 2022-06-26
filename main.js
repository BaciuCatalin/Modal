console.log("main.js loaded...");
let button = document.getElementById("button");
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];
let cancel = document.getElementsByClassName("cancel")[0];

button.onclick = function() {
  modal.style.display = "block";
}

cancel.onclick = function(){
  modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  // else {
  //   modal.style.display = "block";
  // }
}
