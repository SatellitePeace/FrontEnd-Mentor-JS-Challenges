const notifications = document.getElementById("notifications");

const markAsRead = document.getElementById("mark__as--read");

const readMsgs = document.querySelectorAll(".read");

const toggleAlert = document.querySelectorAll(".unread__msgs");

// function for toggling read and unread chat
toggleReadMsgs();

function toggleReadMsgs() {
  readMsgs.forEach((msg) => {
    msg.addEventListener("click", () => {
      msg.classList.toggle("mark");
    });
  });
}

// function for marking and unmarking read chats
toggleReadMsgsAndNotification();

function toggleReadMsgsAndNotification() {
  readMsgs.forEach((msg) => {
    msg.addEventListener("click", () => {
      if (msg.classList.contains("mark")) {
        notifications.textContent++;
      } else {
        notifications.textContent--;
      }
    });
  });
}

// function for toggling unread and read alert notification

toggleAlertIcon();

function toggleAlertIcon() {
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

// event listener for marking all as read
markAsRead.addEventListener("click", () => {
  notifications.textContent = 0;
  readMsgs.forEach((msg) => {
    msg.classList.remove("mark");
  });
  toggleAlert.forEach((msg) => {
    msg.classList.add("unread");
  });
});
