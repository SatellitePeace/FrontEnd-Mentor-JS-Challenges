# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

**This project is a collaboration between us, Scrimba, and Kevin Powell. If you'd like to see how Kevin would tackle the project, you can [follow along on Scrimba's free course](https://scrimba.com/learn/spacetravel).**

### Screenshot

![Design preview for the Space tourism website coding challenge](./preview.jpg)

### Links

- Live Site URL: https://chebakia-space-tourism.netlify.app

## My process

- i first created the four pages and positioned them absolue so that they will overlap.
- I used css z-index to determine the position of each page in the document
- Then i used javascript and event listeners to manipulate the postions of the various sections so that when a page is clicked the z-index of other pages will decrease while the z-index of the clicked page nav link will increase
- I used async/await to import the json file and created multiple funtion which i called inside the asyc funtion to allow me access and use the data in the async function in multiple other funtions
- I used innerHtml and textContent alongside event listeners and funtions to dynamically add, remove, and toggle contents in the DOM.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Desktop-first workflow
- Vanilla Javascript

### What I learned

I learned two new things

- The first was how to make the pagination progress bar to work along side the navbar controls with just a few lines lines of code as opposed to creating new functions and writing a bunch of codes

```
changePage();
function changePage() {
  links.forEach((link, index) => {
    progress[0].style.background = "white";
    const currentPage = index + 1;
    link.addEventListener("click", () => {
      reduceZindex();
      sections[index].style.zIndex = 50;
      if (sections[index].style.zIndex == 50) {
        removeCurrentPageIndicator();
        progress[index].style.background = "white";
        progressHeading.textContent = `${currentPage}/4`;
      } else if (sections[index].style.zIndex == 5) {
        progress.style.background = "transparent";
      }
    });
  });
}

function reduceZindex() {
  sections.forEach((section) => {
    section.style.zIndex = 5;
  });
}
function removeCurrentPageIndicator() {
  progress.forEach((p) => {
    p.style.background = "transparent";
  });
}
```

- I also learned a simpler and neater way to create and toggle small screen menu without writing and maniputing bunch of html and css code

- CSS

```
.change .menu__close {
    display: block;
  }
  .change .menu__open {
    display: none;
  }
  .navbar__group {
    position: absolute;
    top: 3rem;
    right: 0;
    flex-direction: column;
    height: calc(100vh - 3rem);
    width: 55%;
    padding: 4rem;
    background-color: rgba(0, 34, 68, 0.9);
    border-radius: 0.5rem 0 0 0;
    transform: translateX(100%);
    transition: transform 0.5s;0;
  }
  .progress__wrapper {
    z-index: 80;
  }
  .change .navbar__group {
    transform: translateX(0);
  }
```

- Javascript

```
const menu = document.querySelector(".menu");

smallnavToggle();
function smallnavToggle() {
  menu.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("change");
  });
}
```

## Author

- Frontend Mentor - [Nneoma Peace](https://www.frontendmentor.io/profile/SatellitePeace)
