# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

![Design preview for the Expenses chart component coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: https://github.com/SatellitePeace/FrontEnd-Mentor-JS-Challenges/tree/main/junior-challenges/expenses-chart-component-main
- Live Site URL:https://frontend-expense-chart-js.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Chart.js
- Mobile-first workflow

### What I learned

- i learned how to give include a date in a specific array element using index

```js
backgroundColor: (color) => {
  let date = new Date().getDay();
  let colors = color.index == date ? "hsl(186, 34%, 60%)" : "hsl(10, 82%, 57%)";
  return colors;
};
```

-i used map for the first time and learned that when you need to iterate over an array and roduce a new array with changing the original array map() is the best method to use.

```js
const day = data.map(function (week) {
  return week.day;
});
```

-I also learned that when you want to see different state while making a httpRequest() you use onreadystatechange instead of onload

```js
 xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);
// some code goes here
  }
```

### Useful resources

- https://www.youtube.com/c/ChartJS-tutorials - This helped me understand the parts of chart.js i needed to get this project

## Author

- Website - Nneoma Peace
