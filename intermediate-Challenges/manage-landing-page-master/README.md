# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Design preview for the Manage landing page coding challenge](./design/desktop-preview.jpg)

### Links

- Live Site URL: https://tourmaline-manager.netlify.app

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I learned how to use scrollLeft, clientWidth, and scrollWidth to create an autoplay slider and a slider control arrows

```
function controlBtn() {
  prevBtn.addEventListener("click", () => {
    containerCard.scrollLeft -= 250;
    autoplaySlider();
  });
  nextBtn.addEventListener("click", () => {
    containerCard.scrollLeft += 250;
    autoplaySlider();
  });
}

// calculate max container width

const maxScrollLeft = containerCard.scrollWidth - containerCard.clientWidth;

// Autoplay Slider
function autoplaySlider() {
  if (containerCard.scrollLeft > maxScrollLeft - 1) {
    containerCard.scrollLeft -= maxScrollLeft;
  } else {
    containerCard.scrollLeft += 1;
  }
}

// Pause slider on hover
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  cards[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoplaySlider, 50));
  });
}
let play = setInterval(autoplaySlider, 50);
```

### AUTHOR

- Frontend Mentor - [Nneoma Peace](https://www.frontendmentor.io/profile/SatellitePeace)
