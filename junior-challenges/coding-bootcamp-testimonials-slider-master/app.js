const prevBtn = document.querySelector(".prev__link");
const nextBtn = document.querySelector(".next__link");
const john = document.querySelector(".john");
const tanya = document.querySelector(".tanya");

controlBtns();

function controlBtns() {
  nextBtn.addEventListener("click", () => {
    tanya.classList.toggle("hide");
    john.classList.toggle("move");
  });
  prevBtn.addEventListener("click", () => {
    tanya.classList.toggle("hide");
    john.classList.toggle("move");
  });
}
