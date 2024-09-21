const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  nav.classList.add("show--nav");
  menu.classList.add("hide--menu");
  close.classList.add("show--close");
  body.classList.add("no--scroll");
});

close.addEventListener("click", () => {
  nav.classList.remove("show--nav");
  menu.classList.remove("hide--menu");
  close.classList.remove("show--close");
  body.classList.remove("no--scroll");
});
