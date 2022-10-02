// small nav script
const smallnav = document.querySelector(".smallnav");
const openNav = document.querySelector(".open__nav");
const closeNav = document.querySelector(".close__nav");
const overlay = document.querySelector(".overlay");

openAndCloseSmallNav();
function openAndCloseSmallNav() {
  openNav.addEventListener("click", () => {
    smallnav.classList.add("show");
    overlay.classList.add("darken");
    openNav.style.display = "none";
    closeNav.style.display = "block";
  });
  closeNav.addEventListener("click", () => {
    smallnav.classList.remove("show");
    overlay.classList.remove("darken");
    openNav.style.display = "block";
    closeNav.style.display = "none";
  });
}

// SLIDER CAROUSEL
const cards = document.querySelectorAll(".card");
const radios = document.querySelectorAll(".slider__dot");
const prevBtn = document.querySelector(".slider__prev");
const nextBtn = document.querySelector(".slider__next");
const containerCard = document.querySelector(".cards");

controlBtn();
function controlBtn() {
  prevBtn.addEventListener("click", () => {
    containerCard.scrollLeft -= 250;
    autoplaySlider();
  });
  nextBtn.addEventListener("click", () => {
    containerCard.scrollLeft += 250;
    autoplaySlider();
  });
}

// calculate max container width

const maxScrollLeft = containerCard.scrollWidth - containerCard.clientWidth;

// Autoplay Slider
function autoplaySlider() {
  if (containerCard.scrollLeft > maxScrollLeft - 1) {
    containerCard.scrollLeft -= maxScrollLeft;
  } else {
    containerCard.scrollLeft += 1;
  }
}

// Pause slider on hover
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  cards[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoplaySlider, 50));
  });
}
let play = setInterval(autoplaySlider, 50);
// CALL TO ACTION FORM VALIDATION
const form = document.getElementById("form");
const input = document.querySelector(".footer__input");
const errorMsg = document.querySelector(".footer__form--error");

validateForm();

function validateForm() {
  form.addEventListener("submit", (e) => {
    const reg = /\S+@\S+\.\S+/;
    if (!reg.test(input.value || input.value == "")) {
      errorMsg.classList.add("error");
      input.placeholder = "email@example.com";
      input.classList.add("alert");
    } else {
      errorMsg.classList.remove("error");
      input.classList.remove("alert");
      input.placeholder = "Updates in your inbox…";
    }
    e.preventDefault();
  });
}
