// =====================================
// CURRENT YEAR
// =====================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =====================================
// NAVBAR ACTIVE LINK
// =====================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// =====================================
// IMAGE FADE-IN EFFECT
// =====================================

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", function () {
        image.classList.add("image-loaded");
    });

});