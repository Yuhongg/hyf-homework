const submit = document.getElementById("button");
let inputValue = document.getElementById("cityName").value;
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09ebe279096f900e7e1ea3ca7b4c5e60";

async function getapi(api_url) {
  const response = await fetch(api_url);
  let data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}

getapi(api_url);

//This data should be showed in your app:

//The chosen city
//Temperature
//Icon for the weather type
//Wind speed
//How clowdy it is
//When sunrise and sunset is
//Optional a map showing where the city is located

// function hideloader() {
//   document.getElementById("loading").style.display = "none";
// }

// function show(data) {
//   let tab = `<tr>
//     <th>City</th>
//     <th>Temperature</th>
//     <th>Wind speed</th>
//     <th>sunrise</th>
//     <th>sunset</th>
//    </tr>`;

//   for (let r of data.list) {
//     tab += `<tr>
//        <td>$(r.city)</td>
//        <td>$(r.office)</td>
//        <td>$(r.position)</td>
//        <td>$(r.salary)</td>
//        </tr>`;
//   }
// }
