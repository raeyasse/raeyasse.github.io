/**
 * slideshow.js
 * Controls the image slideshow on the Activities page.
 * Uses previous/next buttons to cycle through activity photos.
 * Author: Camp Rocky River
 */

document.addEventListener("DOMContentLoaded", function () {

    // List of image filenames in your images/ folder
    // Swap these out for your real activity photo filenames
    const images = [
        "images/activity00.jpg",
        "images/activity01.jpg",
        "images/activity02.webp",
        "images/activity03.webp"
    ];

    // Track which image is currently showing
    let currentIndex = 0;

    // Grab the elements from the HTML
    const img = document.getElementById("slideshow-img");
    const counter = document.getElementById("slideshow-counter");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    /**
     * updateSlide - Updates the displayed image and counter text.
     */
    function updateSlide() {
        img.src = images[currentIndex];
        img.alt = "Camp activity photo " + (currentIndex + 1);
        counter.textContent = (currentIndex + 1) + " / " + images.length;
    }

    // Previous button — go back one image, wrap around to end if at start
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
    });

    // Next button — go forward one image, wrap around to start if at end
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    });

    // Set the initial state
    updateSlide();

});