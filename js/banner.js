window.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".sw_banner", {
    slidesPerView: "auto",
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
