//movies exercise
let badmovieArray;
let newBadMovie;

fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((data) => {
    badmovieArray = data.filter((movie) => movie.rating < 3);
    newBadMovie = badmovieArray.filter((movie) => movie.year > 2000);

    console.log(badmovieArray);
    console.log(newBadMovie);
  })

  .catch((error) => {
    console.log("An error occured");
  });

//promise that resolves after set time

function funcResolve(resolvesAfter) {
  return new Promise((resolve) => setTimeout(resolve, resolvesAfter * 1000));
}

funcResolve(8).then(() => {
  console.log("I was called after 8 seconds!");
});

//Rewrite time
function setTimeoutPromise(resolveAfter) {
  return new Promise((callbackFn) => setTimeout(callbackFn, resolveAfter));
}

function getCurrentLocation() {
  return new Promise(function () {
    navigator.geolocation
      .getCurrentPosition()
      .then((position) => {
        console.log(position);
      })
      .catch((error) => {
        console.log(error);
      });
  }).then(function () {
    console.log("position");
  });
}
