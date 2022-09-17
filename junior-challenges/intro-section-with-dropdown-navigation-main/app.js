const openSidebarBtn = document.getElementById("open__sidebar");
const closeSidebarBtn = document.getElementById("close__sidebar");
const sidebar = document.getElementById("sidebar");
// overlay
const overlay = document.getElementById("overlay");

// FUNTION FOR OPENING AND CLOSING SIDEBAR
function openAndCloseSidebar() {
  openSidebarBtn.addEventListener("click", function () {
    sidebar.classList.add("show");
    overlay.classList.add("overlay");
  });

  closeSidebarBtn.addEventListener("click", function () {
    sidebar.classList.remove("show");
    overlay.classList.remove("overlay");
  });
}

openAndCloseSidebar();

// FOR DROPDOWN ELEMENTS
// for sidebar
const toggleFeatures = document.getElementById("features__dropdown");

const featureDropdownMenu = document.getElementById("features__dropdown--menu");

const toggleCompany = document.getElementById("company__dropdown");

const companyDropdownMenu = document.getElementById("company__dropdown--menu");
// for main nav
const toggleMainNavFeatures = document.getElementById(
  "mainnav__features--dropdown"
);

const featureMainNavDropdownMenu = document.getElementById(
  "mainnav__features--menu"
);

const toggleMainNavCompany = document.getElementById(
  "mainnav__company--dropdown"
);

const companyMainNavDropdownMenu = document.getElementById(
  "mainnav__company--menu"
);

// const

// FUNTION TO TOGGLE THE DROPDOWNS
function toggleDropdowns() {
  // sidebar
  toggleFeatures.addEventListener("click", function () {
    featureDropdownMenu.classList.toggle("active");
    sidebarArrowDirectionForFeatures();
  });

  toggleCompany.addEventListener("click", function () {
    companyDropdownMenu.classList.toggle("active");
    sidebarArrowDirectionForCompany();
  });

  //   for main nav
  toggleMainNavFeatures.addEventListener("click", function () {
    featureMainNavDropdownMenu.classList.toggle("active");
    arrowDirectionForFeatures();
  });

  toggleMainNavCompany.addEventListener("click", function () {
    companyMainNavDropdownMenu.classList.toggle("active");
    arrowDirectionForCompany();
  });
}

toggleDropdowns();

// Arrows for main nav
const arrowUp = document.querySelectorAll(".arrow__up");
const arrowDown = document.querySelectorAll(".arrow__down");

// Arrow directions for dropdown arrows
function arrowDirectionForFeatures() {
  arrowUp[0].classList.toggle("rotate");
  arrowDown[0].classList.toggle("rotate");
}

function arrowDirectionForCompany() {
  arrowUp[1].classList.toggle("rotate");
  arrowDown[1].classList.toggle("rotate");
}

// Arrows for sidebar nav
const sidebarArrowUp = document.querySelectorAll(".sidebar__arrow--up");
const sidebarArrowDown = document.querySelectorAll(".sidebar__arrow--down");

// Arrow directions for dropdown arrows
function sidebarArrowDirectionForFeatures() {
  sidebarArrowUp[0].classList.toggle("rotate");
  sidebarArrowDown[0].classList.toggle("rotate");
}

function sidebarArrowDirectionForCompany() {
  sidebarArrowUp[1].classList.toggle("rotate");
  sidebarArrowDown[1].classList.toggle("rotate");
}
