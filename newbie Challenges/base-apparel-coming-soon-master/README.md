# Frontend Mentor - Base Apparel coming soon page

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

![Design preview for the Base Apparel coming soon page coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: https://github.com/SatellitePeace/FrontEnd-Mentor-JS-Challenges/tree/main/newbie%20Challenges/base-apparel-coming-soon-master
- Live Site URL: https://coming-soon-apparel-frontend.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
  -Bootstrap 5
  -Bootstrap icons
- Mobile-first workflow

### What I learned

Basic form validation with nested if/else statement was the major thing i learned in this project
below is snippet of the nested part of the if/else logic

````
``` else {
    if (!inputValue.includes("@") || !inputValue.includes(".")) {
      formInput.classList.add("warning");
      formAlert.innerHTML = `<small class="alert alert-warning">

      <i class="bi bi-exclamation-circle-fill"></i>  Please include an @ and an .
            </small>`;
      removeAlert();
    } else {
      formInput.classList.add("success");
      formAlert.innerHTML = `<small class="alert alert-primary">
<i class="bi bi-check-circle-fill"></i> form is valid
            </small>`;
      removeAlert();
    }
  }
}
````

## Author

- Frontend Mentor Nneoma Peace
