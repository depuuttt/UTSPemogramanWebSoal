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
