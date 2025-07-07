window.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".sw_banner", {
    slidesPerView: 1,
    spaceBetween: 80,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".banner_slide_next",
      prevEl: ".banner_slide_prev",
    },
    pagination: {
      el: ".banner_slide_pg",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
});
