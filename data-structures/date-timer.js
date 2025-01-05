/*
const now = new Date(); // current datetime in local time zone
console.log(now);

console.log("Miliseconds: ", +now); // returns the number of milliseconds
// const anotherDate = new Date(2011, 10, 12); //YYYY-MM-DD
const anotherDate = new Date(2011, 10, 8, 12, 0, 0); // YYYY-MM-DD HH:mm:ss
console.log(typeof anotherDate);
console.log("Date : ", anotherDate.getDate()); // returns the day of the month
console.log("Full year: ", anotherDate.getFullYear()); // returns the year of the date
console.log("Month: ", anotherDate.getMonth()); // returns the number of the month in 0 based order [0-11]
console.log("Day of week : ", anotherDate.getDay()); // returns the day of the week [0-6]
console.log("Local format: ", anotherDate.toLocaleString()); // returns the date and time in local format
console.log("Local formatted time: ", anotherDate.toLocaleTimeString()); // returns the time in local format
console.log("Timezone in minutes", anotherDate.getTimezoneOffset()); // returns the timezone offset in minutes
console.log(
  anotherDate.getHours(),
  anotherDate.getMinutes(),
  anotherDate.getSeconds()
); // returns the hours, minutes, seconds of the date-time

console.log(anotherDate.toISOString()); // returns the date in ISO8601 format

const options = {
  year: "numeric",
  //   month: "2-digit",
  month: "long",
  //   day: "numeric",
  day: "2-digit",
  weekday: "long",
  //   weekday: "short",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  //   dayPeriod: "short",
  //   timeZone: "UTC",
  timeZoneName: "short",
  timeZoneName: "long",
};

const formatteddate = Intl.DateTimeFormat("en-IN", options).format(anotherDate);
console.log(formatteddate);


const num = 16583416348.54;
const options = {
    style: "currency",
    currency: "INR",
};
console.log("US: ", Intl.NumberFormat("en-US", options).format(num));
console.log("UK: ", Intl.NumberFormat("en-GB", options).format(num));
console.log("Germany: ", Intl.NumberFormat("de-DE", options).format(num));
console.log("France: ", Intl.NumberFormat("fr-FR", options).format(num));
console.log("India: ", Intl.NumberFormat("en-IN", options).format(num));
*/

//Timers
//1. SetTimeout: Executes the function after the specified timeout (in milliseconds)

const timeoutTimer = setTimeout(
  (a) => {
    console.log("Hello, world!", a);
  },
  3000,
  "setTimeout" // this will be the argument of the function that will be executed
);

//2. clearTimeout: Cancels a setTimeout or clearTimeout

clearTimeout(timeoutTimer); // this will clear the timer hence the timeoutTimer function will not be called

//3. setInterval: Executes the function repeatedly after the specified interval (in milliseconds)

const intervalTimer = setInterval(
  (a) => {
    console.log("Hello, world!", a);
  },
  2000,
  "setInterval" // this will be the argument of the function that will be executed
);

//4. clearInterval: Cancels an setInterval
setTimeout(() => {
  clearInterval(intervalTimer);
}, 5000);
