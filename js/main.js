const toggleBurgerMenu = () => {
  const burger = document.querySelector(".burger");

  const nav = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
};

const stepsToggleMenu = () => {
  const stepItems = document.querySelectorAll(".steps__items--item");

  stepItems.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("steps__items--item--active");
    });
  });
};

const slidesPerView = () => {
  const width = window.innerWidth;

  if (width >= 1024) {
    return 3;
  }

  if (width < 1024 && width >= 768) {
    return 2;
  }

  if (width < 768) {
    return 1;
  }
};

const swiper = new Swiper(".mySwiper", {
  slidesPerView: slidesPerView(),
  spaceBetween: 32,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width >= 1024) {
    swiper.params.slidesPerView = 3;
    swiper.update();
  }

  if (width < 1024 && width >= 768) {
    swiper.params.slidesPerView = 2;
    swiper.update();
  }

  if (width < 768) {
    swiper.params.slidesPerView = 1;
    swiper.update();
  }
});

toggleBurgerMenu();
stepsToggleMenu();
