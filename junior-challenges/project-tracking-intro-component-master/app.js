const smallNav = document.querySelector(".small__nav");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

openAndCloseHambuger();

function openAndCloseHambuger() {
  openMenu.addEventListener("click", () => {
    smallNav.style.transform = "scale(1)";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  });
  closeMenu.addEventListener("click", () => {
    smallNav.style.transform = "scale(0)";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  });
}
