document.addEventListener("DOMContentLoaded", function () {
    // Apply enter animation
    document.body.classList.add("page-enter");
  
    setTimeout(() => {
      document.body.classList.add("page-enter-active");
    }, 50);
  
    // Handle exit animation on all links
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (event) {
        if (this.getAttribute("target") === "_blank") return; // Allow new tab links
  
        const href = this.getAttribute("href");
  
        // Ensure it's an internal link (prevents issues with external links)
        if (!href || href.startsWith("#") || href.startsWith("http")) return;
  
        event.preventDefault(); // Stop instant navigation
        document.body.classList.add("page-exit-active"); // Apply exit animation
  
        setTimeout(() => {
          window.location.href = href; // Navigate after animation
        }, 1000); // Adjust this to match CSS transition duration
      });
    });
  });
  
  // Fix for browser back/forward navigation
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) { // If page is loaded from cache (back button)
      document.body.classList.remove("page-exit-active");
      document.body.classList.add("page-enter");
  
      setTimeout(() => {
        document.body.classList.add("page-enter-active");
      }, 50);
    }
  });
  