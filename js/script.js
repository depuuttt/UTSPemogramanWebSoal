// Opening Modal
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");

  function showModal() {
    modal.style.display = "block";
    modal.classList.add("fade-in");
  }

  function hideModal() {
    modal.classList.add("fade-out");
    setTimeout(function () {
      modal.style.display = "none";
      modal.classList.remove("fade-in", "fade-out");
    }, 500);
  }

  setTimeout(showModal, 600);

  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.addEventListener("click", hideModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      hideModal();
    }
  });
});

// Web Development Modal
var modalWeb = document.getElementById("modalWeb");
var openBtnWeb = document.getElementById("openModalWeb");
var closeBtnWeb = document.getElementsByClassName("closeWeb")[0];


openBtnWeb.onclick = function() {
  modalWeb.style.display = "block";
  modalWeb.classList.add("fade-in");
};

closeBtnWeb.onclick = function() {
  modalWeb.style.display = "none";
  modalWeb.classList.add("fade-out");
};

window.onclick = function(event) {
  if (event.target == modalWeb) {
    modalWeb.style.display = "none";
  }
};

// Mobile App Development Modal
var modalMobile = document.getElementById("modalMobile");
var openBtnMobile = document.getElementById("openModalMobile");
var closeBtnMobile = document.getElementsByClassName("closeMobile")[0];


openBtnMobile.onclick = function() {
  modalMobile.style.display = "block";
  modalMobile.classList.add("fade-in");
};

closeBtnMobile.onclick = function() {
  modalMobile.style.display = "none";
  modalMobile.classList.add("fade-out");
};

window.onclick = function(event) {
  if (event.target == modalMobile) {
    modalMobile.style.display = "none";
  }
};

// IT Consultant Modal
var modalConsul = document.getElementById("modalConsul");
var openBtnConsul = document.getElementById("openModalConsul");
var closeBtnConsul = document.getElementsByClassName("closeConsul")[0];


openBtnConsul.onclick = function() {
  modalConsul.style.display = "block";
  modalConsul.classList.add("fade-in");
};

closeBtnConsul.onclick = function() {
  modalConsul.style.display = "none";
  modalConsul.classList.add("fade-out");
};

window.onclick = function(event) {
  if (event.target == modalConsul) {
    modalConsul.style.display = "none";
  }
};