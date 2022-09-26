# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Design preview for the Tip calculator app coding challenge](./design/desktop-preview.jpg)

### Links

- Live Site URL: https://earnest-tip-calculator.netlify.app

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I learned the different use cases of parseInt() and parseFloat() i also learned how to use the number method toFixed() to determine how many decimal i want in a float number

```
 numOfPeople.addEventListener("input", () => {
      customPersonsValue = numOfPeople.value;
      customTipPersons = customServiceTip / parseFloat(customPersonsValue);
      tipPersonPlusTotalAmount = customTipPersons + parseFloat(bill.value);
      tipTotal.textContent = tipPersonPlusTotalAmount.toFixed(2);
    });
```

## Author

- Frontend Mentor - [Nneoma Peace](https://www.frontendmentor.io/profile/SatellitePeace)
