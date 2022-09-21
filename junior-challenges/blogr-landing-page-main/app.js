const mainNavdropdownControls = document.querySelectorAll(".main__nav--links");

const mainNavDropdown = document.querySelectorAll(".main__nav--list");

const mainNavDropdownArrow = document.querySelectorAll(
  ".mainnav__dropdown--arrow"
);

// FUNCTION FOR TOGGLING MAIN NAVBAR DROPDOWNS
toggleMainNavdropown();

function toggleMainNavdropown() {
  mainNavdropdownControls[0].addEventListener("click", function () {
    mainNavDropdown[0].classList.toggle("show");
    mainNavDropdownArrow[0].classList.toggle("active");
  });
  mainNavdropdownControls[1].addEventListener("click", function () {
    mainNavDropdown[1].classList.toggle("show");
    mainNavDropdownArrow[1].classList.toggle("active");
  });
  mainNavdropdownControls[2].addEventListener("click", function () {
    mainNavDropdown[2].classList.toggle("show");
    mainNavDropdownArrow[2].classList.toggle("active");
  });
}

// SMALL SCREEN NAV FUNTIONALITIES
const smallNav = document.querySelector(".nav");

const openSmallNav = document.querySelector(".open__smallnav");

const closeSmallNav = document.querySelector(".close__smallnav");

const smallNavToggle = document.getElementById("smallNav");

const smallNavDropdown = document.querySelectorAll(".small__nav--links");

const smallNavSubmenu = document.querySelectorAll(".small__nav--submenu");

const smallNavDropdownArrow = document.querySelectorAll(".small__nav--arrow ");

// FUNTION TO TOGGLE SMALL NAV
openAndCloseSmallNav();

function openAndCloseSmallNav() {
  openSmallNav.addEventListener("click", () => {
    smallNav.classList.add("show");
    closeSmallNav.style.display = "block";
    openSmallNav.style.display = "none";
  });
  closeSmallNav.addEventListener("click", () => {
    smallNav.classList.remove("show");
    openSmallNav.style.display = "block";
    closeSmallNav.style.display = "none";
  });
}

// FUNCTION FOR TOGGLING MAIN NAVBAR DROPDOWNS
toggleSmallNavDropdown();

function toggleSmallNavDropdown() {
  smallNavDropdown[0].addEventListener("click", function () {
    smallNavSubmenu[0].classList.toggle("visible");
    smallNavDropdownArrow[0].classList.toggle("active");
  });
  smallNavDropdown[1].addEventListener("click", function () {
    smallNavSubmenu[1].classList.toggle("visible");
    smallNavDropdownArrow[1].classList.toggle("active");
  });
  smallNavDropdown[2].addEventListener("click", function () {
    smallNavSubmenu[2].classList.toggle("visible");
    smallNavDropdownArrow[2].classList.toggle("active");
  });
}
