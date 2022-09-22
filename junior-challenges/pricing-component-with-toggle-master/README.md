# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

### Screenshot

![Design preview for the Pricing component with toggle coding challenge](./design/desktop-preview.jpg)

### Links

- Live Site URL: https://friendly-price-toggle-cards.netlify.app/

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned how to make a custom checkbox button input using Css

```
input[type="checkbox"] {
  position: relative;
  width: 70px;
  height: 30px;
  appearance: none;
  background: linear-gradient(
    to top right,
    hsl(236, 72%, 79%),
    hsl(237, 63%, 64%)
  );
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
input:checked[type="checkbox"] {
  background: linear-gradient(
    to top right,
    hsl(234, 14%, 74%),
    hsl(233, 13%, 49%)
  );
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 15%;
  left: 5px;
  background: var(--VeryLightGrayishBlue);
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
}
input:checked[type="checkbox"]::before {
  left: 45px;
}
```

### Useful resources

- [online Tutorials](https://www.youtube.com/watch?v=BQSNBa3gZJU) - I learned how to make custom checkbox button from this channel

## Author

- Frontend Mentor - [Nneoma Peace](https://www.frontendmentor.io/profile/SatellitePeace)
