const footerOne = document.getElementById("card__footer--one");
const footerOneBtn = document.getElementById("btn");

const footerTwo = document.getElementById("card__footer--two");
const footerTwoBtn = document.getElementById("btnTwo");

changeFooterState();

function changeFooterState() {
  footerOneBtn.addEventListener("click", function () {
    footerOne.style.display = "none";
    footerTwo.style.visibility = "visible";
  });

  footerTwoBtn.addEventListener("click", function () {
    footerOne.style.display = "flex";
    footerTwo.style.visibility = "hidden";
  });
}

// BIG SCREEN CHANGE STATE

const bigScreen = document.querySelector(".card__active--bigscreen ");
const bigscreenBtn = document.getElementById("bigscreen__btn");

bigscreenBtn.addEventListener("click", function () {
  bigScreen.classList.toggle("show");
});
