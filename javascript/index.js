function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  //let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss SSS [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss SSS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1);
