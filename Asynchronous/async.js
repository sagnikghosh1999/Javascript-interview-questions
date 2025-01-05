console.log("<<---------Async Javascript--------->>");

//AJAX : Asynchronous Javascript And XML: Allos us to communicate with remote web servers in an asynchronous manner.

//API : Application Programming Interface: Piece of software that can be used by other piece of software/code

const baseUrl = "https://restcountries.com/v3.1/";

/*
//XML HTTP Request:

const getCountryData = (country) => {
  const request = new XMLHttpRequest();
  const url = `${baseUrl}name/${country}`;
  request.open("GET", url);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(country, ": AJAX call 1:", data);
    const neighbour = data?.borders?.[0];
    if (!neighbour) {
      return;
    }

    //AJAX call 2
    const request2 = new XMLHttpRequest();
    const url = `${baseUrl}alpha/${neighbour}`;
    request2.open("GET", url);
    request2.send();
    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(country, ": AJAX call 2:", data2);
    });
  });
};

// getCountryData("usa");
getCountryData("india");

*/

//Using Fetch API:
const country = "india";
// const url = `${baseUrl}name/${country}`;

// const request = fetch(url);
// console.log(request); // returns a promise

//Promise: is a plceholder for a future value of a asynchronous operation

//Promise Lifecycle:
// 1. Pending: Initial state, before the request is fulfilled or rejected.
// 2. Settled: Asynchronous task is completed
// 2. Fulfilled: Once the request is successful, the promise resolves with a value.
// 3. Rejected: Once the request fails, the promise rejects with a reason.

const getCountryData = function (country) {
  const url = `${baseUrl}name/${country}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const [data] = response;
      console.log(country, ": Fetch API call 1:", data);
      const neighbour = data?.borders?.[0];
      const url2 = `${baseUrl}alpha/${neighbour}`;
      return fetch(url2);
    })
    .then((response) => response.json())
    .then((data) => console.log("Fetch API call 2:", data[0]))
    .catch((err) => console.error(err));
};
getCountryData(country);
