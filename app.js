var currentPage = 0;
var totalPages = document.querySelectorAll(".slide").length;
var pageNumber = document.getElementByID("pageNumber");

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        // Left arrow key pressed
        showPreviousSlide();
    } else if (event.key === "ArrowRight") {
        // Right arrow key pressed
        showNextSlide();
    }
});

function showPreviousSlide() {
    // Find the current slide
    var currentSlide = getCurrentSlide();

    // Find the previous slide
    var previousSlide = currentSlide.previousElementSibling;

    // If there is a previous slide, show it
    if (previousSlide) {
        currentSlide.classList.remove("active");
        previousSlide.classList.add("active");
        currentPage--;
        updateFooter();
    }
}

function showNextSlide() {
    // Find the current slide
    var currentSlide = getCurrentSlide();

    // Find the next slide
    var nextSlide = currentSlide.nextElementSibling;

    // If there is a next slide, show it
    if (nextSlide) {
        currentSlide.classList.remove("active");
        nextSlide.classList.add("active");
        currentPage++;
        updateFooter();
    }
}

function getCurrentSlide() {
    // Find the current slide
    var currentSlide = document.querySelector(".slide.active");

    return currentSlide;
}

function updateFooter() {
    // update the footer with current page number
    pageNumber.textContent = currentPage + " / " + totalPages
}