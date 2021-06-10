const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const dateEle = document.querySelector(".date");
const timeEle = document.querySelector(".time");

function setClock() {
  const now = new Date();

  // Analog Clock
  let second = now.getSeconds();
  const secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  let minute = now.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  let hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Electronic Clock
  let ampm = "";
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const day = now.getDay();
  const dayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (second < 10) {
    second = "0" + second;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (hour < 12 && hour >= 0) {
    ampm = "AM";
  } else {
    hour -= 12;
    ampm = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  dateEle.innerHTML = `${dayList[day]}, ${date} ${monthList[month]} ${year}`;
  timeEle.innerHTML = `${hour} : ${minute} : ${second} ${ampm}`;
}

setInterval(setClock, 1000);
