console.log("main.js loaded...");

let button = document.querySelector("#button");
let modal = document.querySelector("#modal");

function cancel() {
  modal.style.display = "none";
  location.reload();
}

button.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    cancel();
  }
};

function nameOf() {
  let userName = document.querySelector("#userName");
  let display = document.querySelector(".display");

  modal.style.display = "none";

  if (userName.value == "Sabin" || userName.value == "Ianis") {
    display.innerText = "Hello " + userName.value + ", this is my first modal!";
    userName.value = "";
  } else {
    display.innerText = "Hello " + userName.value + "!";
    userName.value = "";
  }
}
