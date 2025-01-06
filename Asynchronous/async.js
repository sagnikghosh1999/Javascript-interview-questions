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

const getJson = (url, errorMsg) => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  const url = `${baseUrl}name/${country}`;
  // fetch(url)
  //   .then((response) => {
  //     if (!response.ok) throw new Error(`Country not found ${response.status}`);
  //     return response.json();
  //   })
  getJson(url, "Country Not found")
    .then((response) => {
      const [data] = response;
      console.log(country, ": Fetch API call 1:", data);
      const neighbour = data?.borders?.[0];
      const url2 = `${baseUrl}alpha/${neighbour}`;
      return getJson(url2, "Neighbour country Not found");
    })
    .then((data) => console.log("Fetch API call 2:", data[0]))
    .catch((err) => console.error(err))
    .finally(() => {
      console.log("Fetch API call finished");
    });
};
getCountryData(country);

In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀


//Using XMLHTTPREQUEST
function whereAmI(lat, lng) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
  });
}

function whereAmI(lat, lng) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;
  fetch(url)
    .then((response) => {
      if (!response.ok)
      throw new Error(`Error getting the location, (${response.status})`);
    return response.json();
  })
  .then((response) => {
    console.log(`You are in ${response?.city}, ${response?.countryName}`);
  })
  .catch((err) => console.error(err.message));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    {
      if (Math.random() >= 0.5) {
        resolve("You WIN! 💰");
      } else {
        reject(new Error("You lose your money! 📉"));
    }
  }
}, 2000);
});

lotteryPromise
.then((res) => console.log(res))
.catch((err) => console.error(err));


//Promisifying settimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2).then(() => {
  console.log("2 seconds later");
});
*/

// const currentLocation = navigator.geolocation.getCurrentPosition(
//   (res) => console.log(res),
//   (err) => console.error(err)
// );

//Promisifying geolocation

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

function whereAmI() {
  getPosition()
    .then((res) => {
      const { latitude: lat, longitude: lng } = res.coords;
      const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;
      return fetch(url);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error getting the location, (${response.status})`);
      return response.json();
    })
    .then((response) => {
      console.log(`You are in ${response?.city}, ${response?.countryName}`);
    })
    .catch((err) => console.error(err.message));
}

whereAmI();
