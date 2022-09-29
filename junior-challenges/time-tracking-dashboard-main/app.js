const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("Weekly");
const monthlyBtn = document.getElementById("Monthly");
const workHours = document.querySelectorAll(".hours");
const workPrevious = document.querySelectorAll(".previous");
const allBtns = document.querySelectorAll(".list__link");
// const work = document.getElementById("work");

// FETCH DATA FROM JSON FILE
const URL = "data.json";

dashboard();

async function dashboard() {
  const response = await fetch(URL);
  const data = await response.json();

  // call function in event listener functions
  daily(data);
  weekly(data);
  monthly(data);
}
// daily
daily();
function daily(obj) {
  workHours.forEach((hour, index) => {
    hour.textContent = `${obj[index].timeframes.daily.current}hrs`;
  });
  workPrevious.forEach((prev, index) => {
    prev.textContent = `Yesterday - ${obj[index].timeframes.daily.previous}hrs`;
  });
  dailyBtn.classList.add("active");
  dailyBtn.addEventListener("click", () => {
    workHours.forEach((hour, index) => {
      hour.textContent = `${obj[index].timeframes.daily.current}hrs`;
      dailyBtn.classList.add("active");
    });
    workPrevious.forEach((prev, index) => {
      prev.textContent = `Yesterday - ${obj[index].timeframes.daily.previous}hrs`;
    });
  });
}

// weekly
weekly();
function weekly(obj) {
  weeklyBtn.addEventListener("click", () => {
    workHours.forEach((hour, index) => {
      hour.textContent = `${obj[index].timeframes.weekly.current}hrs`;
    });
    workPrevious.forEach((prev, index) => {
      prev.textContent = `Last Week - ${obj[index].timeframes.weekly.previous}hrs`;
    });
    removeActive();
  });
}
// monthly
monthly();
function monthly(obj) {
  monthlyBtn.addEventListener("click", () => {
    workHours.forEach((hour, index) => {
      hour.textContent = `${obj[index].timeframes.monthly.current}hrs`;
    });
    workPrevious.forEach((prev, index) => {
      prev.textContent = `Last Month - ${obj[index].timeframes.monthly.previous}hrs`;
    });
    removeActive();
  });
}

// Remove the white color from the daily button
function removeActive() {
  dailyBtn.classList.remove("active");
}
