const swiper = new Swiper('.es-swiper1', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    // autoplay: true,

    pagination: {
        el: '.es-swiper1-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.es-swiper1-button-next',
        prevEl: '.es-swiper1-button-prev',
    },
});
const swiper2 = new Swiper('.es-swiper2', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    // autoplay: true,

    pagination: {
        el: '.es-swiper2-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.es-swiper2-button-next',
        prevEl: '.es-swiper2-button-prev',
    },
    breakpoints: {
        0: { // For screens 0px and wider
            slidesPerView: 1,
            spaceBetween: 4,
        },
        576: { // For screens 576px and wider
            slidesPerView: 2,
            spaceBetween: 4,
        },
        1601: { // For screens 1601px and wider
            slidesPerView: 3,
            spaceBetween: 4,
        },
    },
});