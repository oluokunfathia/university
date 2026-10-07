/* ==================================================
   AIKU LUXURY HOTEL
   CONTACT PAGE JAVASCRIPT
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ==========================================
           NAVBAR SCROLL EFFECT
        ========================================== */

        const navbar =
            document.getElementById(
                "mainNavbar"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 50
                ) {

                    navbar.classList.add(
                        "scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "scrolled"
                    );

                }

            }
        );



        /* ==========================================
           CONTACT FORM
        ========================================== */

        const form =
            document.getElementById(
                "contactForm"
            );


        const formMessage =
            document.getElementById(
                "formMessage"
            );


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    formMessage.textContent =
                        "Please complete all required fields.";

                    formMessage.style.color =
                        "#b00020";

                    return;

                }


                formMessage.textContent =
                    "Thank you! Your enquiry has been received.";

                formMessage.style.color =
                    "#403263";


                form.reset();

            }
        );



        /* ==========================================
           IMAGE REVEAL ANIMATION
        ========================================== */

        const revealItems =
            document.querySelectorAll(
                ".facility-card, .intro-image, .collage-item"
            );


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.15
                }

            );


        revealItems.forEach(
            function (item) {

                item.style.opacity =
                    "0";

                item.style.transform =
                    "translateY(35px)";

                item.style.transition =
                    "all .7s ease";

                observer.observe(
                    item
                );

            }
        );



        /* ==========================================
           ADD VISIBLE STYLE
        ========================================== */

        const style =
            document.createElement(
                "style"
            );


        style.textContent = `

            .facility-card.visible,
            .intro-image.visible,
            .collage-item.visible {

                opacity: 1 !important;

                transform:
                    translateY(0) !important;

            }

        `;


        document.head.appendChild(
            style
        );



        /* ==========================================
           MOBILE NAVIGATION
        ========================================== */

        const navLinks =
            document.querySelectorAll(
                ".navbar-nav .nav-link"
            );


        const menu =
            document.getElementById(
                "hotelMenu"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth < 992
                        ) {

                            const collapse =
                                bootstrap.Collapse
                                .getInstance(
                                    menu
                                );

                            if (
                                collapse
                            ) {

                                collapse.hide();

                            }

                        }

                    }
                );

            }
        );



        /* ==========================================
           COLLAGE HOVER
        ========================================== */

        const collageImages =
            document.querySelectorAll(
                ".collage-item"
            );


        collageImages.forEach(
            function (item) {

                item.addEventListener(
                    "mouseenter",
                    function () {

                        item.style.zIndex =
                            "10";

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    function () {

                        item.style.zIndex =
                            "";

                    }
                );

            }
        );

    }
);