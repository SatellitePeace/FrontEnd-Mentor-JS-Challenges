# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Expected behaviour

- The text for the previous period's time should change based on the active timeframe. For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs". For Weekly, it should read "Last Week" e.g. "Last Week - 32hrs". For monthly, it should read "Last Month" e.g. "Last Month - 19hrs".

### Screenshot

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

### Links

- Live Site URL: https://magenta-time-tracking-dashboard.netlify.app

## My process

- First i created i created two sections and nested them in an HTML5 main tag
- Then i used css flexbox to flex these sections i gave the first section a flex-basis of 23%
- The first section contained the user cards and the timeframe controls
- Then i used the second section to create the six cards and used Grid, grid-template-columns, and media queries to display the number of cards i want per row and column
- I then used flex and media queries to make the section column container on smaller screens so that the user card was now placed about the six cards
- I used vmin( height: 130vmin) for the first time to ensure that the user section heigth is equal to the height of the cards in screen size > 900px and > 1200px;

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla Javascript

## Author

- Frontend Mentor - [Nneoma Peace](https://www.frontendmentor.io/profile/SatellitePeace)
