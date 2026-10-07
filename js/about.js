/* =====================================================
   VENTO FURNITURE ABOUT PAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           NAVBAR SCROLL
        ============================================= */

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



        /* =============================================
           BACK TO TOP
        ============================================= */

        const backToTop =
            document.getElementById(
                "backToTop"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 400
                ) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );



        /* =============================================
           HERO ANIMATION
        ============================================= */

        const heroBrand =
            document.querySelector(
                ".hero-brand"
            );


        const valueBox =
            document.querySelector(
                ".value-box"
            );


        const qualityText =
            document.querySelector(
                ".quality-text"
            );


        heroBrand.style.opacity = "0";

        heroBrand.style.transform =
            "translate(-50%, -20px)";


        valueBox.style.opacity = "0";

        valueBox.style.transform =
            "translate(-50%, -50%) scale(.9)";


        qualityText.style.opacity =
            "0";


        setTimeout(
            function () {

                heroBrand.style.transition =
                    "all 1s ease";

                heroBrand.style.opacity =
                    "1";

                heroBrand.style.transform =
                    "translate(-50%, 0)";

            },
            300
        );


        setTimeout(
            function () {

                valueBox.style.transition =
                    "all 1s ease";

                valueBox.style.opacity =
                    "1";

                valueBox.style.transform =
                    "translate(-50%, -50%) scale(1)";

            },
            700
        );


        setTimeout(
            function () {

                qualityText.style.transition =
                    "all .8s ease";

                qualityText.style.opacity =
                    "1";

            },
            1100
        );



        /* =============================================
           FEATURE CARD REVEAL
        ============================================= */

        const cards =
            document.querySelectorAll(
                ".feature-card"
            );


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                            }

                        }
                    );

                },

                {
                    threshold: .2
                }

            );


        cards.forEach(
            function (card) {

                card.style.opacity =
                    "0";

                card.style.transform =
                    "translateY(40px)";

                card.style.transition =
                    "all .7s ease";

                observer.observe(
                    card
                );

            }
        );



        /* =============================================
           MOBILE MENU CLOSE
        ============================================= */

        const navLinks =
            document.querySelectorAll(
                ".navbar-nav .nav-link"
            );


        const navigation =
            document.getElementById(
                "navbarMenu"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth < 992
                        ) {

                            const menu =
                                bootstrap.Collapse
                                .getInstance(
                                    navigation
                                );

                            if (menu) {

                                menu.hide();

                            }

                        }

                    }
                );

            }
        );

    }
);