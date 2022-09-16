# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Design preview for the Interactive card details form coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: https://github.com/SatellitePeace/FrontEnd-Mentor-JS-Challenges/tree/main/junior-challenges/interactive-card-details-form-main
- Live Site URL: https://frontend-interactive-card-form-main.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
  -Bootstrap
- Mobile-first workflow

### What I learned

I learned how to target and add event listeners to html element added dynamically

```document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "reload__btn") {
    window.location.reload();
  }
});
```

I also learned how to use the 'blur' event for form validation

```
document.getElementById("cvc").addEventListener("blur", validateCvc);
```

### Useful resources

- https://regexpattern.com/month/ This helped me with the correct regex for a 16 digit credit card number with spaces and hyphens. I really liked this pattern and will use it going forward.

- https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript - This is an amazing contribution from stackoverflow taught me how to add an event to a dynaimically added element

## Author

- Website - Nneoma Peace
