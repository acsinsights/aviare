
(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },
        methods: function (e) {
            imJs.wowActive();
            imJs.swiperActivation();
            imJs.vedioActivation();
            imJs.counterUp();
            imJs.salActive();
            imJs.progressAvtivation();
            imJs.stickyHeader();
            imJs.backToTopInit();
            imJs.typeJS();
            imJs.searchOpton();
            imJs.menuActive();
            imJs.popupMobileMenu();
            imJs.preloader();
            imJs.smoothScroll();
            imJs.textActivation();
            imJs.radialProgress();
            imJs.scrollAnimations();
            imJs.phoneInputEnhancement();
        },

        wowActive: function () {
            new WOW().init();
        },

        swiperActivation: function () {
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper", {
                    loop: false,
                    loopedSlides: 50,
                    autoHeight: true,
                    shortSwipes: false,
                    longSwipes: false,
                    effect: 'fade',
                    speed: 500,
                    autoplay: {
                        delay: 4000,
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".testimonial-1", {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 2.5,
                        },
                        1300: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
                $(document).ready(function () {
                    var swiper = new Swiper(".mySwiperBanner-three", {
                        loop: false,
                        loopedSlides: 50,
                        autoHeight: true,
                        shortSwipes: false,
                        longSwipes: false,
                        effect: 'fade',
                        speed: 500,
                        autoplay: {
                            delay: 4000,
                        },
                    });
                });
                var swiper = new Swiper(".brand-1", {
                    slidesPerView: 2.5,
                    spaceBetween: 100,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 5,
                        },
                        1300: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
                var swiper = new Swiper(".team-one-swiper", {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
                var swiper = new Swiper(".project-h2-slider", {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    centeredSlides: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 4.2,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
                var swiper = new Swiper(".testimonials-h2", {
                    slidesPerView: 2,
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    // centeredSlides: true,
                    // navigation: {
                    //   nextEl: ".swiper-button-next",
                    //   prevEl: ".swiper-button-prev",
                    // },
                    pagination: {
                        el: '.swiper-pagination2',
                        clickable: true,
                        dynamicBullets: false
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 2,
                        },
                        1300: {
                            slidesPerView: 2,
                        },
                        991: {
                            slidesPerView: 2,

                        },
                        767: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwipers", {
                    loop: true,
                    loopedSlides: 50,
                    autoHeight: true,
                    shortSwipes: false,
                    longSwipes: false,
                    effect: 'fade',
                    speed: 500,
                    autoplay: {
                        delay: 1500,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwipertestimonial", {
                    loop: true,
                    loopedSlides: 50,
                    autoHeight: true,
                    shortSwipes: false,
                    longSwipes: false,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            });

            $(document).ready(function () {

            })

            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh2_Service", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".clients-review-7", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: false,
                    autoplayDisableOnInteraction: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });


            $(document).ready(function () {
                var swiper = new Swiper(".clients-review-testimonials-7", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: false,
                    autoplayDisableOnInteraction: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: true
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });


            });


            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh2_Business_Cases", {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 2,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 4,
                        },
                        1300: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh2_clients", {
                    grabCursor: true,
                    centeredSlides: true,
                    loop: true,
                    autoplay: true,
                    spaceBetween: 30,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        1500: { slidesPerView: 3, spaceBetween: 80 },
                        1300: { slidesPerView: 2, spaceBetween: 40 },
                        1199: { slidesPerView: 2, spaceBetween: 32 },
                        991: { slidesPerView: 1, spaceBetween: 28 },
                        767: { slidesPerView: 1, spaceBetween: 20 },
                        0: { slidesPerView: 1, spaceBetween: 14 }
                    },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".swiper-service-13", {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3.5,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        1199: {
                            slidesPerView: 2,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh3_business-case", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        1199: {
                            slidesPerView: 2,

                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh1_team", {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    centeredSlides: false,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 4,
                        },
                        1300: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,

                        },
                        767: {
                            slidesPerView: 3,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh3_team", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                        1500: {
                            slidesPerView: 3,
                        },
                        1399: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh1_blog", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerView: 3,
                    speed: 1500,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    centeredSlides: false,
                    breakpoints: {
                        1600: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        1220: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        900: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },

                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: true
                    },
                    navigation: {
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    },
                    pagination: {
                        el: ".swiper-pag",
                        clickable: true,
                    }
                });


            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh2_blog", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerView: 3,
                    speed: 1500,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    centeredSlides: false,
                    breakpoints: {
                        1600: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 3,
                        },
                        1220: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },

                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: true
                    },
                    navigation: {
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    },
                    pagination: {
                        el: ".swiper-pag",
                        clickable: true,
                    }
                });


            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh2_banner", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    effect: 'fade',
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 4000,
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiperh3_banner", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    autoplay: {
                        delay: 4000,
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-case-11", {
                    slidesPerView: 2.1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    centeredSlides: true,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    autoplay: {
                        delay: 4000,
                    },
                    breakpoints: {
                        1600: {
                            slidesPerView: 2.1,
                        },
                        1300: {
                            slidesPerView: 2.1,
                        },
                        1220: {
                            slidesPerView: 2.1,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 1.5,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },

                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-13", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                    // centeredSlides: true,
                    loop: true,
                    // loopFillGroupWithBlank: true,
                    speed: 2000,
                    effect: 'fade',
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + "</span>";
                        },
                    },

                });
            });
        },


        vedioActivation: function (e) {
            $('#play-video, .play-video').on('click', function (e) {
                e.preventDefault();
                $('#video-overlay, .video-overlay').addClass('open');
                $("#video-overlay, .video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            });

            $('.video-overlay, .video-overlay-close').on('click', function (e) {
                e.preventDefault();
                close_video();
            });

            $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    close_video();
                }
            });

            function close_video() {
                $('.video-overlay.open').removeClass('open').find('iframe').remove();
            };
        },
        counterUp: function (e) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
            $('.counter').addClass('animated fadeInDownBig');
            $('h3').addClass('animated fadeIn');
        },
        salActive: function () {
            sal({
                threshold: 0.1,
                once: true,
            });
        },
        progressAvtivation: function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    var bars = document.querySelectorAll('.meter > span');
                    console.clear();
                    setInterval(function () {
                        bars.forEach(function (bar) {
                            var getWidth = parseFloat(bar.dataset.progress);
                            for (var i = 0; i < getWidth; i++) {
                                bar.style.width = i + '%';
                            }
                        });
                    }, 100);
                }
            })
        },
        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },
        backToTopInit: function () {
            $(document).ready(function () {
                "use strict";

                var progressPath = document.querySelector('.progress-wrap path');
                var pathLength = progressPath.getTotalLength();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
                var updateProgress = function () {
                    var scroll = $(window).scrollTop();
                    var height = $(document).height() - $(window).height();
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                }
                updateProgress();
                $(window).scroll(updateProgress);
                var offset = 50;
                var duration = 550;
                jQuery(window).on('scroll', function () {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery('.progress-wrap').addClass('active-progress');
                    } else {
                        jQuery('.progress-wrap').removeClass('active-progress');
                    }
                });
                jQuery('.progress-wrap').on('click', function (event) {
                    event.preventDefault();
                    jQuery('html, body').animate({ scrollTop: 0 }, duration);
                    return false;
                })


            });

        },
        typeJS: function () {
            jQuery(document).ready(function ($) {
                //set animation timing
                var animationDelay = 2500,
                    //loading bar effect
                    barAnimationDelay = 3800,
                    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
                    //letters effect
                    lettersDelay = 50,
                    //type effect
                    typeLettersDelay = 150,
                    selectionDuration = 1500,
                    typeAnimationDelay = selectionDuration + 800,
                    //clip effect 
                    revealDuration = 1000,
                    revealAnimationDelay = 1500;

                initHeadline();


                function initHeadline() {
                    //insert <i> element for each letter of a changing word
                    singleLetters($('.cd-headline.letters').find('b'));
                    //initialise headline animation
                    animateHeadline($('.cd-headline'));
                }

                function singleLetters($words) {
                    $words.each(function () {
                        var word = $(this),
                            letters = word.text().split(''),
                            selected = word.hasClass('is-visible');
                        for (i in letters) {
                            if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
                        }
                        var newLetters = letters.join('');
                        word.html(newLetters).css('opacity', 1);
                    });
                }

                function animateHeadline($headlines) {
                    var duration = animationDelay;
                    $headlines.each(function () {
                        var headline = $(this);

                        if (headline.hasClass('loading-bar')) {
                            duration = barAnimationDelay;
                            setTimeout(function () {
                                headline.find('.cd-words-wrapper').addClass('is-loading')
                            }, barWaiting);
                        } else if (headline.hasClass('clip')) {
                            var spanWrapper = headline.find('.cd-words-wrapper'),
                                newWidth = spanWrapper.width() + 10
                            spanWrapper.css('width', newWidth);
                        } else if (!headline.hasClass('type')) {
                            //assign to .cd-words-wrapper the width of its longest word
                            var words = headline.find('.cd-words-wrapper b'),
                                width = 0;
                            words.each(function () {
                                var wordWidth = $(this).width();
                                if (wordWidth > width) width = wordWidth;
                            });
                            headline.find('.cd-words-wrapper').css('width', width);
                        };

                        //trigger animation
                        setTimeout(function () {
                            hideWord(headline.find('.is-visible').eq(0))
                        }, duration);
                    });
                }

                function hideWord($word) {
                    var nextWord = takeNext($word);

                    if ($word.parents('.cd-headline').hasClass('type')) {
                        var parentSpan = $word.parent('.cd-words-wrapper');
                        parentSpan.addClass('selected').removeClass('waiting');
                        setTimeout(function () {
                            parentSpan.removeClass('selected');
                            $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
                        }, selectionDuration);
                        setTimeout(function () {
                            showWord(nextWord, typeLettersDelay)
                        }, typeAnimationDelay);

                    } else if ($word.parents('.cd-headline').hasClass('letters')) {
                        var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
                        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
                        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

                    } else if ($word.parents('.cd-headline').hasClass('clip')) {
                        $word.parents('.cd-words-wrapper').animate({
                            width: '2px'
                        }, revealDuration, function () {
                            switchWord($word, nextWord);
                            showWord(nextWord);
                        });

                    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
                        $word.parents('.cd-words-wrapper').removeClass('is-loading');
                        switchWord($word, nextWord);
                        setTimeout(function () {
                            hideWord(nextWord)
                        }, barAnimationDelay);
                        setTimeout(function () {
                            $word.parents('.cd-words-wrapper').addClass('is-loading')
                        }, barWaiting);

                    } else {
                        switchWord($word, nextWord);
                        setTimeout(function () {
                            hideWord(nextWord)
                        }, animationDelay);
                    }
                }

                function showWord($word, $duration) {
                    if ($word.parents('.cd-headline').hasClass('type')) {
                        showLetter($word.find('i').eq(0), $word, false, $duration);
                        $word.addClass('is-visible').removeClass('is-hidden');

                    } else if ($word.parents('.cd-headline').hasClass('clip')) {
                        $word.parents('.cd-words-wrapper').animate({
                            'width': $word.width() + 10
                        }, revealDuration, function () {
                            setTimeout(function () {
                                hideWord($word)
                            }, revealAnimationDelay);
                        });
                    }
                }

                function hideLetter($letter, $word, $bool, $duration) {
                    $letter.removeClass('in').addClass('out');

                    if (!$letter.is(':last-child')) {
                        setTimeout(function () {
                            hideLetter($letter.next(), $word, $bool, $duration);
                        }, $duration);
                    } else if ($bool) {
                        setTimeout(function () {
                            hideWord(takeNext($word))
                        }, animationDelay);
                    }

                    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                        var nextWord = takeNext($word);
                        switchWord($word, nextWord);
                    }
                }

                function showLetter($letter, $word, $bool, $duration) {
                    $letter.addClass('in').removeClass('out');

                    if (!$letter.is(':last-child')) {
                        setTimeout(function () {
                            showLetter($letter.next(), $word, $bool, $duration);
                        }, $duration);
                    } else {
                        if ($word.parents('.cd-headline').hasClass('type')) {
                            setTimeout(function () {
                                $word.parents('.cd-words-wrapper').addClass('waiting');
                            }, 200);
                        }
                        if (!$bool) {
                            setTimeout(function () {
                                hideWord($word)
                            }, animationDelay)
                        }
                    }
                }

                function takeNext($word) {
                    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
                }

                function takePrev($word) {
                    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
                }

                function switchWord($oldWord, $newWord) {
                    $oldWord.removeClass('is-visible').addClass('is-hidden');
                    $newWord.removeClass('is-hidden').addClass('is-visible');
                }
            });
        },
        searchOpton: function () {
            $(document).on('click', '#search', function () {
                $(".search-input-area").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '#close', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
        },
        preloader: function () {
            window.addEventListener('load', function () {
                document.querySelector('body').classList.add("loaded")
            });
        },
        menuActive: function () {
            $(document).on('click', '#menu-btn', function () {
                $("#side-bar").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '.close-icon-menu', function () {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '.onepage .mainmenu li a', function () {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
        },
        popupMobileMenu: function (e) {
            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });

            $('.close-menu').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rts-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open')
            });

            // nav menu
            $('.body-mobile .mainmenu .has-droupdown > a, .body-mobile .mainmenu .with-megamenu > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rts-megamenu').toggleClass('active');
                $(this).toggleClass('open')
            })
            // nav menu end

            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rts-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open');
            });

            $('.one-page-vavigation-popup .mainmenu li > a').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu li > a').siblings('.submenu').removeClass('active');
            })
        },

        // pne page scroll top
        smoothScroll: function (e) {
            $(document).on('click', '.onepage a[href^="#"]', function (event) {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 2000);
            });
            $(document).on('click', 'a.scroll-down', function (event) {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 2000);
            });
        },
        // pne page scroll top

        textActivation: function (e) {



            $(document).ready(function () {


                var changebox = $(".changebox");

                if (changebox.length) {
                    var firstclone = changebox.children(":first").clone();
                    changebox.append(firstclone);

                    var fsstr = changebox.parent().css("font-size");
                    fsstr = fsstr.slice(0, fsstr.indexOf(".title"));
                    var fs = parseInt(fsstr);

                    changebox.css("height", changebox.parent().css("font-size"));
                    ChangeSize(0);
                    setInterval(Next, 2000);

                    function Next() {
                        if (typeof Next.i == 'undefined') {
                            Next.i = 0;
                        }
                        Next.i++;
                        if (Next.i == changebox.children("span").length) {
                            Next.i = 1;
                            changebox.scrollTop(0);
                        }
                        changebox.animate({ scrollTop: (fs * Next.i) + Next.i * 5 + 3 }, 500);
                        setTimeout(function () {
                            ChangeSize(Next.i);
                        }, 500);

                    }

                    function ChangeSize(i) {
                        var word = changebox.children("span").eq(i);
                        var wordsize = word.css("width");
                        changebox.css("width", wordsize);
                    }
                }


            });

        },
        // smooth scroll one page stop

        radialProgress: function () {
            function radial_animate() {
                $('svg.radial-progress').each(function (index, value) {

                    $(this).find($('circle.bar--animated')).removeAttr('style');
                    // Get element in Veiw port
                    var elementTop = $(this).offset().top;
                    var elementBottom = elementTop + $(this).outerHeight();
                    var viewportTop = $(window).scrollTop();
                    var viewportBottom = viewportTop + $(window).height();

                    if (elementBottom > viewportTop && elementTop < viewportBottom) {
                        var percent = $(value).data('countervalue');
                        var radius = $(this).find($('circle.bar--animated')).attr('r');
                        var circumference = 2 * Math.PI * radius;
                        var strokeDashOffset = circumference - ((percent * circumference) / 100);
                        $(this).find($('circle.bar--animated')).animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
                    }
                });
            }
            // To check If it is in Viewport 
            var $window = $(window);
            function check_if_in_view() {
                $('.countervalue').each(function () {
                    if ($(this).hasClass('start')) {
                        var elementTop = $(this).offset().top;
                        var elementBottom = elementTop + $(this).outerHeight();

                        var viewportTop = $(window).scrollTop();
                        var viewportBottom = viewportTop + $(window).height();

                        if (elementBottom > viewportTop && elementTop < viewportBottom) {
                            $(this).removeClass('start');
                            $('.countervalue').text();
                            var myNumbers = $(this).text();
                            if (myNumbers == Math.floor(myNumbers)) {
                                $(this).animate({
                                    Counter: $(this).text()
                                }, {
                                    duration: 2800,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(Math.ceil(now) + '%');
                                    }
                                });
                            } else {
                                $(this).animate({
                                    Counter: $(this).text()
                                }, {
                                    duration: 2800,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(now.toFixed(2) + '$');
                                    }
                                });
                            }

                            radial_animate();
                        }
                    }
                });
            }

            $window.on('scroll', check_if_in_view);
            $window.on('load', check_if_in_view);

        },

        scrollAnimations: function () {
            // Intersection Observer for fade-in animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const delay = element.getAttribute('data-delay') || 0;

                        setTimeout(() => {
                            element.classList.add('fade-in');
                        }, delay);

                        observer.unobserve(element);
                    }
                });
            }, observerOptions);

            // Observe all elements with fade-in class
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        },

        phoneInputEnhancement: function () {
            // Phone number formatting and validation
            const phoneInput = document.querySelector('.phone-input-container input[type="tel"]');
            const countrySelect = document.querySelector('#countryCode');
            const flagDisplay = document.querySelector('#flagDisplay');

            if (phoneInput && countrySelect && flagDisplay) {
                // Custom dropdown functionality
                const customDropdown = document.querySelector('#customDropdown');
                const dropdownSelected = document.querySelector('#dropdownSelected');
                const dropdownOptions = document.querySelector('#dropdownOptions');

                if (customDropdown && dropdownSelected && dropdownOptions) {
                    dropdownSelected.addEventListener('click', function (e) {
                        e.stopPropagation();
                        dropdownSelected.classList.toggle('active');
                        dropdownOptions.classList.toggle('show');
                    });

                    // Close dropdown when clicking outside
                    document.addEventListener('click', function (e) {
                        if (!customDropdown.contains(e.target)) {
                            dropdownSelected.classList.remove('active');
                            dropdownOptions.classList.remove('show');
                        }
                    });

                    // Handle option selection
                    const options = dropdownOptions.querySelectorAll('.dropdown-option');
                    options.forEach(option => {
                        option.addEventListener('click', function () {
                            const value = this.getAttribute('data-value');
                            const flagUrl = this.getAttribute('data-flag');
                            const countryName = this.getAttribute('data-country');
                            const codeText = this.querySelector('.option-code').textContent;

                            // Update selected display
                            const selectedFlag = dropdownSelected.querySelector('.selected-flag');
                            const selectedCode = dropdownSelected.querySelector('.selected-code');

                            if (flagUrl) {
                                selectedFlag.innerHTML = `<img src="${flagUrl}" alt="${countryName} Flag" style="width: 20px; height: 15px; object-fit: cover; border-radius: 2px;">`;
                            }
                            selectedCode.textContent = codeText;

                            // Update hidden select
                            countrySelect.value = value;

                            // Update flag display
                            const flagImageDisplay = document.querySelector('#flagImage');
                            if (flagImageDisplay && flagUrl) {
                                flagImageDisplay.src = flagUrl;
                                flagImageDisplay.alt = countryName + ' Flag';
                            }

                            // Close dropdown
                            dropdownSelected.classList.remove('active');
                            dropdownOptions.classList.remove('show');
                        });
                    });
                }

                // Update flag display when country changes (fallback for hidden select)
                countrySelect.addEventListener('change', function (e) {
                    const selectedOption = e.target.options[e.target.selectedIndex];
                    const flagUrl = selectedOption.getAttribute('data-flag');
                    const countryName = selectedOption.getAttribute('data-country');
                    const flagImage = document.querySelector('#flagImage');

                    if (flagUrl && flagImage) {
                        flagImage.src = flagUrl;
                        flagImage.alt = countryName + ' Flag';

                        // Add error handling for failed image loads
                        flagImage.onerror = function () {
                            console.warn('Flag image failed to load:', flagUrl);
                            // You could add a fallback here if needed
                        };
                    }
                });
                // Format phone number as user types
                phoneInput.addEventListener('input', function (e) {
                    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

                    // Basic formatting based on length
                    if (value.length > 0) {
                        if (value.length <= 3) {
                            value = value;
                        } else if (value.length <= 6) {
                            value = value.slice(0, 3) + ' ' + value.slice(3);
                        } else if (value.length <= 9) {
                            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
                        } else {
                            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 9) + ' ' + value.slice(9, 12);
                        }
                    }

                    e.target.value = value;
                });

                // Validate phone number on blur
                phoneInput.addEventListener('blur', function (e) {
                    const value = e.target.value.replace(/\D/g, '');
                    const countryCode = countrySelect.value;

                    // Basic validation - at least 7 digits
                    if (value.length < 7) {
                        e.target.style.borderColor = '#e74c3c';
                        e.target.setCustomValidity('Please enter a valid phone number');
                    } else {
                        e.target.style.borderColor = '';
                        e.target.setCustomValidity('');
                    }
                });

                // Reset validation on focus
                phoneInput.addEventListener('focus', function (e) {
                    e.target.style.borderColor = '';
                    e.target.setCustomValidity('');
                });
            }
        },
    }
    imJs.m();

    // Government Agencies Swiper - Check if we're on service-details page
    if (window.location.pathname.includes('service-details.html')) {
        // Service details page - show only 3 slides
        var governmentAgenciesSwiper = new Swiper(".government-agencies-swiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
            pagination: {
                el: '.government-agencies-pagination',
                clickable: true,
                dynamicBullets: false
            }
        });
    } else {
        // Home page - original configuration
        var governmentAgenciesSwiper = new Swiper(".government-agencies-swiper", {
            slidesPerView: 6,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                }
            },
            pagination: {
                el: '.government-agencies-pagination',
                clickable: true,
                dynamicBullets: false
            }
        });
    }

    // Client Logos Swiper
    var clientLogosSwiper = new Swiper(".client-logos-swiper", {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 20,
            }
        },
        pagination: {
            el: '.client-logos-pagination',
            clickable: true,
            dynamicBullets: false
        }
    });

    // Testimonial Swiper
    var testimonialSwiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
            dynamicBullets: false
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        allowTouchMove: true,
        grabCursor: true
    });
})(jQuery, window)

// Chat functionality
function openChat() {
    // You can customize this function to open your preferred chat system
    // For example: open a chat widget, redirect to a chat page, or show a modal

    // Option 1: Show an alert (temporary solution)
    alert('Chat feature coming soon! Please contact us via WhatsApp or email.');

    // Option 2: Redirect to a contact page
    // window.location.href = '#contact';

    // Option 3: Open a chat widget (if you have one)
    // if (typeof window.chatWidget !== 'undefined') {
    //     window.chatWidget.open();
    // }
}

// Hero Form Handling
document.addEventListener('DOMContentLoaded', function () {
    const heroForm = document.getElementById('heroContactForm');

    if (heroForm) {
        heroForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(heroForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');

            // Basic validation
            if (!name || !email || !phone || !service) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Phone validation (basic)
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(phone)) {
                showNotification('Please enter a valid phone number.', 'error');
                return;
            }

            // Show loading state
            const submitBtn = heroForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Submitting...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Show success message
                showNotification('Thank you! We have received your request and will contact you within 24 hours.', 'success');

                // Reset form
                heroForm.reset();

                // Here you would typically send the data to your server
                console.log('Form submitted:', {
                    name: name,
                    email: email,
                    phone: phone,
                    service: service,
                    timestamp: new Date().toISOString()
                });

            }, 2000);
        });
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease-out;
        font-family: 'Poppins', sans-serif;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-content i:first-child {
        font-size: 18px;
    }
    
    .notification-content span {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// Sticky Sidebar Implementation
document.addEventListener('DOMContentLoaded', function () {
    const sidebarContainer = document.querySelector('.col-xl-4.col-md-12.col-sm-12.col-12.mt_lg--60.pl--50.pl_md--0.pl-lg-controler.pl_sm--0');
    const breadcrumbArea = document.querySelector('.rts-breadcrumb-area');
    const footerArea = document.querySelector('.rts-footer-area');

    if (sidebarContainer && breadcrumbArea) {
        let isSticky = false;
        let originalPosition = {};

        // Store original position after page loads
        setTimeout(() => {
            const rect = sidebarContainer.getBoundingClientRect();
            originalPosition.top = rect.top + window.pageYOffset;
            originalPosition.left = rect.left;
            originalPosition.width = rect.width;
            console.log('Original position stored:', originalPosition);
        }, 500);

        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const breadcrumbBottom = breadcrumbArea.offsetTop + breadcrumbArea.offsetHeight;
            const footerTop = footerArea ? footerArea.offsetTop : document.body.scrollHeight;

            // Check if we should make it sticky
            const shouldBeSticky = scrollTop > (breadcrumbBottom - 50) && scrollTop < (footerTop - sidebarContainer.offsetHeight - 100);

            if (shouldBeSticky && !isSticky) {
                // Use stored original position to avoid width jumping
                sidebarContainer.style.position = 'fixed';
                sidebarContainer.style.top = '120px';
                sidebarContainer.style.left = originalPosition.left + 'px';
                sidebarContainer.style.width = originalPosition.width + 'px';
                sidebarContainer.style.zIndex = '1000';
                sidebarContainer.style.transition = 'all 0.3s ease';
                isSticky = true;

                console.log('Sidebar is now sticky at:', originalPosition.left, 'width:', originalPosition.width);
            } else if (!shouldBeSticky && isSticky) {
                // Remove sticky
                sidebarContainer.style.position = '';
                sidebarContainer.style.top = '';
                sidebarContainer.style.left = '';
                sidebarContainer.style.width = '';
                sidebarContainer.style.zIndex = '';
                sidebarContainer.style.transition = '';
                isSticky = false;

                console.log('Sidebar is no longer sticky');
            }
        }

        // Initial check after position is stored
        setTimeout(() => {
            handleScroll();
        }, 600);

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Handle window resize
        window.addEventListener('resize', function () {
            if (!isSticky) {
                // Update stored position when not sticky
                setTimeout(() => {
                    const rect = sidebarContainer.getBoundingClientRect();
                    originalPosition.left = rect.left;
                    originalPosition.width = rect.width;
                    console.log('Position updated on resize:', originalPosition);
                }, 100);
            }
        });
    } else {
        console.log('Sidebar container or breadcrumb not found');
    }
});