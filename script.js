document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photo");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxText = document.getElementById("lightbox-text");
    const closeBtn = document.querySelector(".close");

    function handleScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        photos.forEach(photo => {
            const photoTop = photo.getBoundingClientRect().top;

            if (photoTop < triggerBottom) {
                photo.classList.add("show");
            } else {
                photo.classList.remove("show");
            }
        });
    }

    function openLightbox(event) {
        const img = event.target;
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.getAttribute("data-caption");
        lightboxText.textContent = img.getAttribute("data-text");
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    photos.forEach(photo => {
        photo.addEventListener("click", openLightbox);
    });

    closeBtn.addEventListener("click", closeLightbox);

    window.addEventListener("scroll", handleScroll);

    // Initial check in case any photos are already in view
    handleScroll();
});
