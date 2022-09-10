const card = document.querySelector(".card");
const ratings = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".rating__btn");

// GET THE VALUE OF THE CLICKED RATING BUTTON
const ratingStar = ratings.forEach((button) => {
  button.addEventListener("click", () => {
    const firedButton = button.value;

    // change button style on click
    removeBtnStyles();

    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
    } else {
      button.classList.add("clicked");
    }
    // call function to input number of rating stars in the feedback ui
    feedback(firedButton);
  });
});
// remove button style from the inactive button
function removeBtnStyles() {
  ratings.forEach((item) => {
    item.classList.remove("clicked");
  });
}

// ADD EVENT LISTENER TO SUBMIT BTN TO RETURN THE RATING FEEDBACK
function feedback(ratingStar) {
  submitBtn.addEventListener("click", function () {
    return (card.innerHTML = ` <section class="thankYou__section">
        <picture class="thankYou__img">
          <img src="/images/illustration-thank-you.svg" alt="" class="thankYou--img">
        </picture>
        <h5>
          You Selected ${ratingStar} out of 5 stars</h5>
        <h1 class="rating__heading">
          Thank you!
        </h1>

        <p class="rating__text">
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>
      </section>`);
  });
}
