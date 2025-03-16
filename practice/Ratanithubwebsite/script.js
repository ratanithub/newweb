document.addEventListener("DOMContentLoaded", function () {
    // Image Slider Functionality
    let index = 0;

    function moveSlide(step) {
        const slides = document.querySelectorAll('.slider-images img');
        const totalSlides = slides.length;

        // Update index
        index += step;

        // Loop around if the index is out of bounds
        if (index >= totalSlides - 2) {  // Since 3 images will be shown at once
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 3;  // Loop to the last set of 3 images
        }

        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.style.transform = `translateX(-${index * 33.33}%)`;  // Adjust for 3 images at once
    }

    // Optional: Auto-slide the images every 3 seconds
    setInterval(() => moveSlide(1), 3000);

    // Attach slider controls to buttons
    document.querySelector('.prev').addEventListener("click", () => moveSlide(-1));
    document.querySelector('.next').addEventListener("click", () => moveSlide(1));
});
