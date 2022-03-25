console.log("Fetch API");

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let form = document.querySelector("#formID");
let query = document.getElementById("query");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let queryCity = query.value;

  // in a url, anytihg after ? is a query parameter
  // in the format of name = value
  // q
  // Query parameters are separated by &
  // appid

  let WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=59cc63d45ae4752acbc1749c59637a5a&units=imperial`;

  // Fetch returns a promise
  // cors - 다른 origin 에서 접속 못하게
  fetch(WEATHER_URL, { mode: "cors" })
    .then( (response)=>{
      // console.log(response);
      // .json Parses the response body to JSON, JavaScript Object Notation
      return response.json();
    })
    .then( (data)=>{
      console.log(data);
      city.textContent = data.name;
      temp.textContent = data.main.temp + " F";
    })
    .catch( (err)=>{
      console.error(err);
      city.textContent = err.message;
    });
});






let giphySearch = document.getElementById('giphySearch');
let giphySubmit = document.getElementById('giphy');
let giphyFirst = document.getElementById('first');
let giphySecond = document.getElementById('second');



giphySubmit.addEventListener('submit',function(event){
    event.preventDefault();

    let GIPHY_URL = `https://api.giphy.com/v1/gifs/translate?s=${giphySearch.value}&api_key=3yYeEX2hIR3XiWXenYYvM3Y20GIW0Ifd`;

    fetch(GIPHY_URL)
    .then( (response) => {
        return response.json();
    })
    .then( (response) => {
        // console.log(response);
        return giphySecond.src = response.data.images.original.url;
    })

    .catch( (err) => {
        console.log(err);
    })

})