/* =====================================================
   RUTGERS UNIVERSITY-CAMDEN
   INDEX PAGE JAVASCRIPT
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           NAVBAR SCROLL EFFECT
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
                    window.scrollY > 500
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
           FLAGS ANIMATION
        ============================================= */

        const flags =
            document.querySelectorAll(
                ".flag"
            );


        flags.forEach(
            function (flag, index) {

                flag.style.opacity =
                    "0";

                flag.style.transform =
                    "translateY(20px)";


                setTimeout(
                    function () {

                        flag.style.transition =
                            "all .5s ease";

                        flag.style.opacity =
                            "1";

                        flag.style.transform =
                            "translateY(0)";

                    },

                    150 + (index * 100)

                );

            }
        );



        /* =============================================
           CAMPUS IMAGE REVEAL
        ============================================= */

        const campusImage =
            document.querySelector(
                ".campus-image"
            );


        const imageObserver =
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
                                    "scale(1)";

                            }

                        }
                    );

                },

                {
                    threshold: .2
                }

            );


        if (campusImage) {

            campusImage.style.opacity =
                "0";

            campusImage.style.transform =
                "scale(1.08)";

            campusImage.style.transition =
                "opacity 1s ease, transform 1.2s ease";

            imageObserver.observe(
                campusImage
            );

        }



        /* =============================================
           MOBILE MENU CLOSE
        ============================================= */

        const navLinks =
            document.querySelectorAll(
                ".navbar-nav .nav-link"
            );


        const navigation =
            document.getElementById(
                "mainNavigation"
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