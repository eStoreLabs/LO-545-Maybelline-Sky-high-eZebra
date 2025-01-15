const swiper = new Swiper('.swiper1', {
            // Optional parameters
            loop: true,
            autoHeight: true,
            // autoplay: true,

            pagination: {
                el: '.swiper1-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper1-button-next',
                prevEl: '.swiper1-button-prev',
            },
        });
        const swiper2 = new Swiper('.swiper2', {
            // Optional parameters
            loop: true,
            autoHeight: true,
            // autoplay: true,

            pagination: {
                el: '.swiper2-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper2-button-next',
                prevEl: '.swiper2-button-prev',
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