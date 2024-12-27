function updateClock() {
  var now = new Date();
  var dayname = now.getDay(),
    month = now.getMonth(),
    date = now.getDate(),
    year = now.getFullYear(),
    hours = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    period = "AM";
  // period.style.color = "red";
  // var months = [
  //   "01",
  //   "02",
  //   "03",
  //   "04",
  //   "05",
  //   "06",
  //   "07",
  //   "08",
  //   "09",
  //   "10",
  //   "11",
  //   "12",
  // ];
  var months = [
    "Jan.",
    "Feb.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  if (hours == 0) hours = 12;

  if (hours > 12) {
    hours = hours - 12;
    period = "PM";
  }
  // adding s to the hr,min and min when the time is greater than 1
  const smallHrs = document.querySelector(".hrs");
  const smallMins = document.querySelector(".mins");
  const smallSecs = document.querySelector(".secs");
  // Hour Section
  if (hours > 1) {
    smallHrs.innerText = "hrs";
  } else {
    smallSecs.innerText = "hr";
  }
  //Mins Section
  if (sec > 1) {
    smallMins.innerText = "mins";
  } else {
    smallSecs.innerText = "min";
  }
  //Second Section
  if (sec > 1) {
    smallSecs.innerText = "secs";
  } else {
    smallSecs.innerText = "sec";
  }

  // add 0 in the beginning of number if less than 10
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector("#dayname").innerHTML = days[dayname];
  document.querySelector("#month").innerHTML = months[month];
  document.querySelector("#daynum").innerHTML = date;
  document.querySelector("#year").innerHTML = year;
  document.querySelector("#hour").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = min;
  document.querySelector("#seconds").innerHTML = sec;
  document.querySelector("#period").innerHTML = period;
}

function intiClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

intiClock();
