$(document)
    .ready(function () {

        $('.dropdown-menu a.dropdown-toggle')
            .on('click', function (e) {
                if (!$(this).next().hasClass('show')) {
                    $(this)
                        .parents('.dropdown-menu')
                        .first()
                        .find('.show')
                        .removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show'); // appliqué au ul
                $(this)
                    .parent()
                    .toggleClass('show'); // appliqué au li parent

                $(this)
                    .parents('li.nav-item.dropdown.show')
                    .on('hidden.bs.dropdown', function (e) {
                        $('.dropdown-submenu .show').removeClass('show'); // appliqué au ul
                        $('.dropdown-submenu.show').removeClass('show'); // appliqué au li parent
                    });
                return false;
            });

        $(window).scroll(function () {
            $scrollamount = $(window).scrollTop();

            if ($scrollamount > 200) {
                $(".scrollup").addClass("active");

            } else {
                $(".scrollup").removeClass("active");

            }
        });

        jQuery('#exampleModal').on('hidden.bs.modal', function (e) {
            // do something...
            jQuery('#exampleModal iframe').attr("src", jQuery("#exampleModal  iframe").attr("src"));
        });

        //
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            padding: 10,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        })
    });

function myFunction(x) {
    x
        .classList
        .toggle("change");
}

// preloader

window.onload = function () {
    setTimeout(function () {
        var loader = document.getElementById("preloader");
        loader.style.display = "none";
    }, 5000);
}