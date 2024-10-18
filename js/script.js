

function toggleMenu() {
  const navDown = document.querySelector(".nav2 .down");
  navDown.classList.toggle("show");
}    const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, // Enable infinite loop
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});