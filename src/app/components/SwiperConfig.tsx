import { Pagination } from "swiper/modules";

export const projectSwiperConfig = {
    modules: [Pagination],
    loop: true,
    pagination: { clickable: true },
    centeredSlides: true,
    initialSlide: 0,
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 12 },
        640: { slidesPerView: 1, spaceBetween: 12 },
        768: { slidesPerView: 2, spaceBetween: 16, centeredSlides: false },
        1024: { slidesPerView: 3, spaceBetween: 24 },
    },
};

export const modalSwiperConfig = {
    modules: [Pagination],
    pagination: { clickable: true },
    spaceBetween: 10,
    loop: true,
};
