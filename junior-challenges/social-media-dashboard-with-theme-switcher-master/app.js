const toggleBtn = document.getElementById("checkbox");
// Dark Theme Toggle
toggleLightDarkMode();

function toggleLightDarkMode() {
  toggleBtn.addEventListener("click", () => {
    if (toggleBtn.checked === true) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  });
}
