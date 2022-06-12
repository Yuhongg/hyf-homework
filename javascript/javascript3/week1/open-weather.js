async function showWeatherDataForCity() {
  const cityInput = document.getElementById("city-input");
  const cityData = document.getElementById("city-data");
  const cityValue = cityInput.value;
  if (!cityValue) alert("Please enter a valid city name.");

  const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=09ebe279096f900e7e1ea3ca7b4c5e60`;

  cityInput.value = `Loading data for ${cityValue}`;
  let response = await fetch(fetchURL);
  if (response.ok) {
    let json = await response.text();
    let iteratedJSON = "";
    let indentationCount = 0;
    for (let char of json) {
      iteratedJSON += char;
      if (char === "{") {
        // Indent 4 spaces
        iteratedJSON += "\n";
        indentationCount += 4;
        for (let i = 0; i < indentationCount; i++) {
          iteratedJSON += " ";
        }
      } else if (char === "}") {
        indentationCount -= 4;
      } else if (char === ",") {
        // Additional data entry, create whitespace
        iteratedJSON += "\n";
        for (let i = 0; i < indentationCount; i++) {
          iteratedJSON += " ";
        }
      }
    }
    cityData.value = iteratedJSON;
    cityInput.value = `Showing data for ${cityValue}...`;
  } else {
    alert("An HTTP-error occurred: " + response.status);
  }
}
