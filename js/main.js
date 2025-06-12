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

toggleBurgerMenu();
stepsToggleMenu();
