var currentPage = 0;
var totalPages = document.querySelectorAll(".slide").length;
var pageNumber = document.getElementById("pageNumber");

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
        
        // Check if the slide is viewable
        checkShowablity(previousSlide.id)
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
        // Check if the slide is viewable
        checkShowablity(nextSlide.id)
    }
}

function getCurrentSlide() {
    // Find the current slide
    var currentSlide = document.querySelector(".slide.active");

    return currentSlide;
}

function updateFooter() {
    // update the footer with current page number
    if (currentPage.toString().length !== totalPages.toString().length) {
        const leadingZeroes = Array(totalPages.toString().length - currentPage.toString().length).fill('0').join('');
        currentPage = leadingZeroes + currentPage;
    }
    pageNumber.textContent = currentPage + " / " + (totalPages - 1);
}


function checkShowablity(slide) {
    if (slide === "slide0") {
        document.querySelector("footer").style.display = "none";
    } else {
        document.querySelector("footer").style.display = "block";
    }
}

