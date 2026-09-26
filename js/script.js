/**
 * Laerskool Paulpietersburg
 * Main JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {

    setupMobileMenu();
    setupContactForm();
    setupSmoothScrolling();

});


/**
 * Mobile navigation menu
 */
function setupMobileMenu() {

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}


/**
 * Close mobile menu after clicking a navigation link
 */
function setupSmoothScrolling() {

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            const mainNav = document.querySelector(".main-nav");
            const menuToggle = document.querySelector(".menu-toggle");

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }

        });

    });

}


/**
 * Contact form
 */
function setupContactForm() {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please complete all fields.");
            return;
        }

        alert("Thank you, " + name + ". Your message has been received.");

        contactForm.reset();

    });

}