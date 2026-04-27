/**
 * testimonials.js
 * Loads 6 additional reviews from testimonials.json via AJAX (fetch API).
 * All 6 load into the More Reviews section when "Show More" is clicked.
 * Author: Camp Rocky River
 */

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("testimonials-container");
    const showMoreBtn = document.getElementById("showMoreBtn");

    /**
     * buildCard - Creates and returns a single testimonial card element.
     * @param {Object} testimonial - One testimonial object from the JSON file.
     * @returns {HTMLElement} - A fully built testimonial card div.
     */
    function buildCard(testimonial) {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        const quote = document.createElement("p");
        quote.classList.add("testimonial-quote");
        quote.textContent = "\u201C" + testimonial.quote + "\u201D";

        const name = document.createElement("p");
        name.classList.add("testimonial-name");
        name.textContent = "\u2014 " + testimonial.name;

        const role = document.createElement("p");
        role.classList.add("testimonial-role");
        role.textContent = testimonial.role;

        card.appendChild(quote);
        card.appendChild(name);
        card.appendChild(role);

        return card;
    }

    // AJAX fetch — loads testimonials.json without reloading the page
    fetch("testimonials.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Show the button once data is ready
            showMoreBtn.style.display = "inline-block";

            // Show More — injects all 6 cards on click
            showMoreBtn.addEventListener("click", function () {
                data.forEach(function (testimonial) {
                    container.appendChild(buildCard(testimonial));
                });
                showMoreBtn.style.display = "none";
            });
        })
        .catch(function (error) {
            console.error("Error loading testimonials:", error);
        });

});