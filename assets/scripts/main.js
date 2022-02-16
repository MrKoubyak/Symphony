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

// Manage Tags Tabs
if(window.location.hash) {
  // Get HashTag from URL
  var hash = window.location.hash;
  // Search Tab 
  hash += '-tab';
  var hashTabTrigger = document.querySelector(hash);
  // If Tab exist, open content
  if(hashTabTrigger){
      var hashTab = bootstrap.Tab.getOrCreateInstance(hashTabTrigger)
      hashTab.show()
  }
}