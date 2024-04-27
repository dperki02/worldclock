function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    //let losAngelesDateElement = document.querySelector("#los-angeles .date");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss SSS [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss SSS [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("MMMM Do YYYY"));
  let cityListElement = document.querySelector("#cityList");
  cityListElement.innerHTML += ` 
    <div
      class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format(
        "h:mm:ss SSS "
      )} <small>${cityTime.format("A")}</small></div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1);

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);
