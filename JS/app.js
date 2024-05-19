var currentPage = 0;
var totalPages = document.querySelectorAll(".slide").length;
var pageNumber = document.getElementById("pageNumber");

let pre = document.querySelector('.previous')
let next = document.querySelector('.next')

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        // Left arrow key pressed
        showPreviousSlide();
    } else if (event.key === "ArrowRight") {
        // Right arrow key pressed
        showNextSlide();
    }
});

pre.addEventListener('click', () => {
    showPreviousSlide();
});

next.addEventListener('click', () => {
    showNextSlide();
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
        document.querySelector("footer").style.display = "flex";
    }
}

//  --------------------------------------------------------------------
let mySlides = document.querySelectorAll('.slide');
mySlides.forEach((slide, idx) => {
    console.log(slide, idx);
    slide.id = `slide${idx}`;
})

let slides = document.querySelectorAll('.slide');

let seasonsIds = ['slide2', 'slide6', 'slide9', 'slide19', 'slide22', 'slide31', 'slide34'];

let first = `
<div class="theme">
    <div class="shape">
        <img src="./images/page-one/Artboard 1.png" alt="shape" class="bg">
    </div>				
</div>
`

let season = `		
    <div class="temp">
        <img src="images/season-topic/Artboard 5.png" alt="" class="right-shape">
        <img src="images/season-topic/Artboard 4.png" alt="" class="mask">
        <img src="images/season-topic/Artboard 2.png" alt="" class="circle">
        <img src="images/season-topic/Artboard 3.png" alt="" class="left-shape">
    </div>`

let info = `		
    <div class="header">
        <img src="./images/info-template/info-template.png" alt="header">
    </div>`



slides.forEach(slide => {
    if (slide.id === 'slide0') {
        slide.insertAdjacentHTML('afterbegin', first);
    }

    else if (seasonsIds.includes(slide.id)){
        slide.insertAdjacentHTML('afterbegin', season);
    }
    
    else {
        slide.insertAdjacentHTML('afterbegin', info);
    }
})


