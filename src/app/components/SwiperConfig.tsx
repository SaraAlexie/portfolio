"use client";
import { Pagination, Navigation } from "swiper/modules";

export const projectSwiperConfig = {
    modules: [Pagination, Navigation],
    loop: true,
    spaceBetween: 16,
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
    modules: [Pagination, Navigation],
    pagination: { clickable: true },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    loop: true,
    spaceBetween: 16,
};
