const navOpen = document.querySelector(".nav__icon");
const navClose = document.querySelector(".nav__close");
const showMenu = document.querySelector(".nav__list");
const showOverlay = document.querySelector(".nav__bgOverlay");

navOpen.addEventListener("click", () => {
  showMenu.classList.add("show");
  showOverlay.classList.add("active");
  document.body.style =
    "visibility: visible; height: 100vh; width: 100vw; overflow: hidden;";
});

navClose.addEventListener("click", () => {
  showMenu.classList.remove("show");
  showOverlay.classList.remove("active");
  document.body.style = "visibility: visible; height: initial; width: 100vw;";
});

// aos
AOS.init({
  offset: 200,
  delay: 100,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
