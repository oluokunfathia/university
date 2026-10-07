// ==================================================
// CURRENT YEAR
// ==================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==================================================
// ACTIVE NAVIGATION
// ==================================================

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const page =
        link.getAttribute("href");

    if (page === currentPage) {

        link.classList.add("active");

    }

});


// ==================================================
// IMAGE LOADING EFFECT
// ==================================================

const images =
    document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", () => {

        image.style.opacity = "1";

    });

});