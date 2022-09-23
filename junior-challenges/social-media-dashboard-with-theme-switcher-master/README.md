# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

### Links

- Live Site URL: https://cute-social-media-dashboard-darkmode.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I learned how to create a theme toggle without having to change the colors for each item. All i did was change the colours in the variables add them in a new class and use Javascript to toggle the class when the checkbox is checked/unchecked

```.dark {
  --VeryDarkBlueBG: hsl(0, 0%, 100%);
  --VeryDarkBlueTopBGPattern: hsl(225, 100%, 98%);
  --DarkDesaturatedBlueCardBG: hsl(227, 47%, 96%);
  --DesaturatedBlueText: hsl(228, 12%, 44%);
  --WhiteText: hsl(230, 17%, 14%);
  --DarkGrayishBlueText: hsl(0, 0%, 83%);
}

```

## Author

- Frontend Mentor - [Nneoma Peace](https://www.frontendmentor.io/profile/SatellitePeace)
