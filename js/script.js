const xhr = new XMLHttpRequest();
const container = document.getElementById("confirmation");

xhr.onload = function () {
  if (this.status === 200) {
    container.innerHTML = xhr.responseText;
  } else {
    console.warn("FUCK YOU!");
  }
};

xhr.open("GET", "../view/confirmationMessage/index.html");
xhr.send();
