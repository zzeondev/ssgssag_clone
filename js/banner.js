window.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".sw_banner", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
