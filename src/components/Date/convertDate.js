var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

export const getDateTime = () => {
  const dateObject = new Date();
  const hours = addZero(dateObject.getHours());
  var newHours = hours > 12 ? hours - 12 : hours;
  var ampm = hours >= 12 ? "PM" : "AM";
  const minutes = addZero(dateObject.getMinutes());
  const seconds = addZero(dateObject.getSeconds());
  let monthName = dateObject.getMonth();
  var year = dateObject.getFullYear();
  var month = monthNames[monthName];
  var date = dateObject.getDate();
  let new_date =
    newHours +
    ":" +
    minutes +
    " " +
    ampm +
    " " +
    "at" +
    " " +
    date +
    " " +
    month +
    " " +
    year +
    " ";

  return new_date;
};
