document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navBar-links")[0];
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});

const hiddenTop = document.querySelectorAll(".navBar");
