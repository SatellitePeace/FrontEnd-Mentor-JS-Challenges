// GET DATA FROM DATA.JSON
const xhr = new XMLHttpRequest();

const url = "data.json";

xhr.open("GET", url, true);

xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);

    const day = data.map(function (week) {
      return week.day;
    });

    const amount = data.map(function (week) {
      return week.amount;
    });

    // INCLUDE JSON DATA INTO BAR CHAT
    const myChart = document.getElementById("myChart").getContext("2d");

    const externalChart = new Chart(myChart, {
      type: "bar",
      data: {
        labels: day,
        datasets: [
          {
            label: false,
            data: amount,
            borderRadius: 6,
            backgroundColor: (color) => {
              let date = new Date().getDay();
              let colors =
                color.index == date
                  ? "hsl(186, 34%, 60%)"
                  : "hsl(10, 82%, 57%)";
              return colors;
            },
            hoverBackgroundColor: "hsl(10, 79%, 65%)",
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              title: function (tooltip) {
                return "You Spent";
              },
              // add dollar sign to front of tooltip label
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ":";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(context.parsed.y);
                }
                return label;
              },
              afterBody: function (context) {
                return `on ${context[0].label}`;
              },
            },
            displayColors: false,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
};
