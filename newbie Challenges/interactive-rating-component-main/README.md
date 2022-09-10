# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Overview

### The challenge

Your challenge is to build out this interactive rating component and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Design preview for the Interactive rating component coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: https://github.com/SatellitePeace/FrontEnd-Mentor-JS-Challenges/tree/main/newbie%20Challenges/interactive-rating-component-main
- Live Site URL: https://interactive-rating-frontend-card.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

while working through this project i learned that i could use the same solution i used to toggle a FAQ accordion to change the states of the rating buttons

LIKE SO

```css
.rate.clicked {
  background-color: hsl(25, 97%, 53%);
  color: hsl(0, 0%, 100%);
}
```

```js
function removeBtnStyles() {
  ratings.forEach((item) => {
    item.classList.remove("clicked");
  });
}
```

### Continued development

In future project i will like to add a reload button to enable the user to go back and select another rating score if they feel that their previous rating was either too high or too low.

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/32842967/get-value-of-the-clicked-button) - This juggled my memory on how to get the value of a clicked button.

## Author

- Frontend Mentor: Nneoma Peace (@SatellitePeace)
