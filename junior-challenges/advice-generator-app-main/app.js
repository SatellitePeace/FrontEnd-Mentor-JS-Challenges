// Bring in Html Element
const btn = document.getElementById("btn");
const adviceText = document.getElementById("section");

// Advice API URL
const URL = "https://api.adviceslip.com/advice";

async function advice() {
  const response = await fetch(URL);
  const data = await response.json();
  const { id, advice } = data.slip;
  adviceText.innerHTML = `<h1 class="advice__heading">Advice # ${id}</h1>
        <p class="advice__text">
      " ${advice} "
        </p>`;
}
advice();

//btn Event Listener for changing advise
btn.addEventListener("click", function () {
  advice();
});
