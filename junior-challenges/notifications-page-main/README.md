# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the Notifications page coding challenge](./design/desktop-preview.jpg)

### Links

- Live Site URL: https://fastidious-notification-chat-page.netlify.app

## My process

I created the entire HTML structure first then i went before styling it,
As i styled the project i had back to do some HTML restrcturing where i added divs to the article elements to separate them from the small element and create a break like structure between the time stamp and the main content

-Finally i added my Javascript

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned that sometimes when you use foreach, it may not give you the desired result and can end up selecting all the elements instead of just a single element at a time as intended

-And where foreach does not work for a nodelist you can use the index method as seen below

```function toggleAlertIcon() {
  readMsgs[0].addEventListener("click", () => {
    toggleAlert[0].classList.toggle("unread");
  });
  readMsgs[1].addEventListener("click", () => {
    toggleAlert[1].classList.toggle("unread");
  });
  readMsgs[2].addEventListener("click", () => {
    toggleAlert[2].classList.toggle("unread");
  });
}
```

## Author

- Frontend Mentor - Nneoma Peace
