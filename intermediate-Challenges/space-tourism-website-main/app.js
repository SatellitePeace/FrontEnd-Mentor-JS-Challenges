// const sections = document.querySelectorAll("section");

// let counter1 = 0;
// let counter2 = 1;
// const sectionTwo = document.querySelector(".section__2");
// window.addEventListener("wheel", (e) => {
//   const deltaY = e.deltaY > 0;
//   if (deltaY) {
//     counter1++;
//     counter2++;
//   } else {
//     counter1--;
//     counter2--;
//     console.log(counter1, counter2);
//   }

//   if (counter1 === 4) {
//     Array.from(sections).forEach((section) => {
//       section.style.left = "0";
//     });
//     counter1 = 0;
//     counter2 = 1;
//     return;
//   }

//   if (counter1 === -1) {
//     Array.from(sections).forEach((section) => {
//       if (section.classList[0] === "section__4") {
//         return;
//       }
//       section.style.left = "-100vw";
//     });
//     counter1 = 3;
//     counter2 = 4;
//   }

//   document.querySelector(
//     `.section__${deltaY ? counter1 : counter2}`
//   ).style.left = `${deltaY ? "-100vw" : "0"}`;
// });

let counter1 = 0;

const sectionTwo = document.querySelector(".section__2");
const links = document.querySelectorAll(".navbar__link");
const sections = document.querySelectorAll("section");
const progress = document.querySelectorAll(".circle");
const progressHeading = document.querySelector(".progress h5");

changePage();
function changePage() {
  links.forEach((link, index) => {
    progress[0].style.background = "white";
    const currentPage = index + 1;
    link.addEventListener("click", () => {
      reduceZindex();
      sections[index].style.zIndex = 50;
      if (sections[index].style.zIndex == 50) {
        removeCurrentPageIndicator();
        progress[index].style.background = "white";
        progressHeading.textContent = `${currentPage}/4`;
      } else if (sections[index].style.zIndex == 5) {
        progress.style.background = "transparent";
      }
    });
  });
}

function reduceZindex() {
  sections.forEach((section) => {
    section.style.zIndex = 5;
  });
}
function removeCurrentPageIndicator() {
  progress.forEach((p) => {
    p.style.background = "transparent";
  });
}
// SMALL SCREEN SIDEBAR NAV
const menu = document.querySelector(".menu");

smallnavToggle();
function smallnavToggle() {
  menu.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("change");
  });
}
// Dynaimcally add content for the destinations page
const moonBtn = document.getElementById("moon");
const marsBtn = document.getElementById("mars");
const europaBtn = document.getElementById("europa");
const titanBtn = document.getElementById("titan");
const destinationInfo = document.querySelector(".destination__info");
const destinationDetails = document.querySelector(".destination__details");
const mainDestinationImg = document.getElementById("img");
const destinationImg = document.querySelector(".destination__Img");

destination();

async function destination() {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);
  moon(data);
  mars(data);
  europa(data);
  titan(data);
  displayMoon(data);
  commander(data);
  specialist(data);
  pilot(data);
  engineer(data);
  displayCommander(data);
  launch(data);
  spaceSport(data);
  capsule(data);
  displayLaunch(data);
}

// DYNAMICALLY ADD CONTENTS TO DESTIONATIONS TAB

// moon
function moon(data) {
  displayMoon(data);
  moonBtn.addEventListener("click", () => {
    displayMoon(data);
  });
}
// remove moon active class
function removeMoonActive() {
  moonBtn.classList.remove("active");
}

// destination mars
function mars(data) {
  marsBtn.addEventListener("click", () => {
    removeMoonActive();
    const { name, images, description, distance, travel } =
      data.destinations[1];
    mainDestinationImg.innerHTML = `<img src="${images.webp}" alt="mars" class="destination__img">`;

    destinationInfo.innerHTML = `<h2>
                ${name}
                </h2>
                <p>
            ${description}
                </p>`;
    destinationDetails.innerHTML = `<article>
                  <h4>
                    <span>
                      EST.TRAVEL TIME
                    </span> <br>
                 ${travel}
                  </h4>
                </article>
                <article>
                  <h4>
                    <span>
                      AVG.DISTANCE
                    </span><br>
                  ${distance}
                  </h4>
                </article>
              </div>
            </article>`;
  });
}

// destination europa
function europa(data) {
  europaBtn.addEventListener("click", () => {
    removeMoonActive();
    const { name, images, description, distance, travel } =
      data.destinations[2];

    mainDestinationImg.innerHTML = `<img src="${images.webp}" alt="europa" class="destination__img">`;

    destinationInfo.innerHTML = `<h2>
                ${name}
                </h2>
                <p>
            ${description}
                </p>`;
    destinationDetails.innerHTML = `<article>
                  <h4>
                    <span>
                      EST.TRAVEL TIME
                    </span> <br>
                 ${travel}
                  </h4>
                </article>
                <article>
                  <h4>
                    <span>
                      AVG.DISTANCE
                    </span><br>
                  ${distance}
                  </h4>
                </article>
              </div>
            </article>`;
  });
}
// destination titan
function titan(data) {
  titanBtn.addEventListener("click", () => {
    removeMoonActive();
    const { name, images, description, distance, travel } =
      data.destinations[3];
    mainDestinationImg.innerHTML = `<img src="${images.webp}" alt="europa" class="destination__img">`;

    destinationInfo.innerHTML = `<h2>
                ${name}
                </h2>
                <p>
            ${description}
                </p>`;
    destinationDetails.innerHTML = `<article>
                  <h4>
                    <span>
                      EST.TRAVEL TIME
                    </span> <br>
                 ${travel}
                  </h4>
                </article>
                <article>
                  <h4>
                    <span>
                      AVG.DISTANCE
                    </span><br>
                  ${distance}
                  </h4>
                </article>
              </div>
            </article>`;
  });
}
// display and event listener for destination moon
function displayMoon(data) {
  const { name, images, description, distance, travel } = data.destinations[0];
  mainDestinationImg.innerHTML = `<img src="${images.webp}" alt="moon" class="destination__img">`;

  destinationInfo.innerHTML = `<h2>
                ${name}
                </h2>
                <p>
            ${description}
                </p>`;
  destinationDetails.innerHTML = `<article>
                  <h4>
                    <span>
                      EST.TRAVEL TIME
                    </span> <br>
                 ${travel}
                  </h4>
                </article>
                <article>
                  <h4>
                    <span>
                      AVG.DISTANCE
                    </span><br>
                  ${distance}
                  </h4>
                </article>
              </div>
            </article>`;
}

// DYNAMICALLY ADD CONTENTS FOR CREW TABS
const crewInfo = document.querySelector(".crew__info");
const crewFigure = document.querySelector(".crew__figure");
const commanderBtn = document.getElementById("commander");
const specialistBtn = document.getElementById("specialist");
const pilotBtn = document.getElementById("pilot");
const engineerBtn = document.getElementById("engineer");

function commander(data) {
  displayCommander(data);
  commanderBtn.addEventListener("click", () => {
    displayCommander(data);
  });
}
// remove crew current class
function removeCrewCurrent() {
  commanderBtn.classList.remove("current");
}

function specialist(data) {
  const { name, images, role, bio } = data.crew[1];

  specialistBtn.addEventListener("click", () => {
    removeCrewCurrent();
    crewInfo.innerHTML = ` <h3>
               ${role}
                </h3>
                <h2>
               ${name}
                </h2>
                <p>
                ${bio}
                </p>`;

    crewFigure.innerHTML = ` <img src="${images.webp}" alt="image of Mark Shuttleworth"
                class="crew__img">`;
  });
}
function pilot(data) {
  const { name, images, role, bio } = data.crew[2];

  pilotBtn.addEventListener("click", () => {
    removeCrewCurrent();
    crewInfo.innerHTML = ` <h3>
               ${role}
                </h3>
                <h2>
               ${name}
                </h2>
                <p>
                ${bio}
                </p>`;

    crewFigure.innerHTML = ` <img src="${images.webp}" alt="image of Victor Glover"
                class="crew__img">`;
  });
}
function engineer(data) {
  const { name, images, role, bio } = data.crew[3];

  engineerBtn.addEventListener("click", () => {
    removeCrewCurrent();
    crewInfo.innerHTML = ` <h3>
               ${role}
                </h3>
                <h2>
               ${name}
                </h2>
                <p>
                ${bio}
                </p>`;

    crewFigure.innerHTML = ` <img src="${images.webp}" alt="image of Anousheh Ansari"
                class="crew__img">`;
  });
}
function displayCommander(data) {
  const { name, images, role, bio } = data.crew[0];

  crewInfo.innerHTML = ` <h3>
               ${role}
                </h3>
                <h2>
               ${name}
                </h2>
                <p>
                ${bio}
                </p>`;

  crewFigure.innerHTML = ` <img src="${images.webp}" alt="image of douglas hurley"
                class="crew__img">`;
}

// DYANAMICALLY ADD CONTENTS FOR TECHNOLOGY

const techInfo = document.querySelector(".technology__info");
const techFigure = document.querySelector(".technology__figure");
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");

function launch(data) {
  displayLaunch(data);
  btnOne.addEventListener("click", () => {
    displayLaunch(data);
  });
}

// remove crew current class
function removeTechnologyDisplay() {
  btnOne.classList.remove("display");
}

function spaceSport(data) {
  const { name, images, description } = data.technology[1];
  btnTwo.addEventListener("click", () => {
    removeTechnologyDisplay();
    techInfo.innerHTML = `
    <h3> the terminlogy
                  </h3>
                  <h2>
                   ${name}
                  </h2>
                  <p>
                  ${description}
                  </p>`;
    techFigure.innerHTML = `<img src="${images.portrait}" alt="Spaceport"
                class="technology__img technology__potrait">
                <img src="${images.landscape}" alt="Spaceport"
                class="technology__img technology__landscape">
                `;
  });
}

function capsule(data) {
  const { name, images, description } = data.technology[2];
  btnThree.addEventListener("click", () => {
    removeTechnologyDisplay();
    techInfo.innerHTML = `
    <h3> the terminlogy
                  </h3>
                  <h2>
                   ${name}
                  </h2>
                  <p>
                  ${description}
                  </p>`;
    techFigure.innerHTML = `<img src="${images.portrait}" alt="Space capsule"
                class="technology__img technology__potrait">
                <img src="${images.landscape}" alt="Space capsule"
                class="technology__img technology__landscape">
                `;
  });
}
function displayLaunch(data) {
  const { name, images, description } = data.technology[0];
  techInfo.innerHTML = `
    <h3> the terminlogy
                  </h3>
                    <h2>
                     ${name}
                    </h2>
                    <p>
                    ${description}
                    </p>`;
  techFigure.innerHTML = `<img src="${images.portrait}" alt="launch vehicle"
                class="technology__img technology__potrait">
                <img src="${images.landscape}" alt="launch vehicle"
                class="technology__img technology__landscape">
                `;
}
