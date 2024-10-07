const btn = document.querySelector(".table");

const modal = document.querySelector(".modal");

const send = document.querySelector(".send");

const overlay = document.querySelector(".overlay");

console.log(overlay);

send.addEventListener("click", function () {
  modal.classList.add("hidden");

  overlay.classList.add("hidden");
});

btn.addEventListener("click", function () {
  modal.classList.remove("hidden");

  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");

  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.keyCode === 27) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

const swiper = new Swiper(".swiper", {
  loop: true,
  keyboard: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
