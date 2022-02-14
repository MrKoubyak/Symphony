/* Back to Top */
const showOnPx = 100;
let backToTopButton = document.getElementById("back-to-top")

function scrollFunction() {
    if (
      document.body.scrollTop > showOnPx ||
      document.documentElement.scrollTop > showOnPx
    ) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollIntoView({
        behavior: "smooth",
      });
}