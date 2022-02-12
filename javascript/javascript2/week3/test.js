//Warmup
//1. log out text in 2.5 sec
setTimeout(() => {
  console.log("Called after 2.5 sec");
}, 2500);

//2.Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function delayFunction(delay, stringTolog) {
  setTimeout(() => {
    console.log(stringTolog);
  }, delay * 1000);
}

delayFunction(5, "This string logged after 5 seconds");
delayFunction(10, "This string logged out after 10 seconds");

//3. creat button
const button = document.createElement("button");
button.innerText = "Click here";
button.addEventListener("click", delayFunction(2, "Called after 5 seconds"));

//4. creat to function
function earthLogger() {
  console.log("Earth");
}
function saturnLogger() {
  console.log("Saturn");
}

function planetLogFunction(callback) {
  callback(planetLogFunction);
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5.log location
function geo() {
  const location = navigator.geolocation.getCurrentPosition(success, error);
  console.log(geolocationPosition.coords.latitude);
  console.log(geolocationPosition.coords.longitude);
}
const locationButton = document.createElement("button");
locationButton.innerText = "log location";
locationButton.addEventListener("click", geo);
// nothing happened

//7. run after delay
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback(runAfterDelay);
  }, delay * 1000);
}

runAfterDelay(4, function (params) {
  console.log("should be logged after 4 seconds");
});

//double click
button.addEventListener("dblclick", () => {
  console.log("Double click!");
});

//crweat jokeCreator
function logFunnyJoke() {
  console.log("This is a funny joke!");
}

function logBadJoke() {
  console.log("This is a bad joke!");
}
function jokeCreator(shouldTellFunnyJoke) {
  if (shouldTellFunnyJoke == true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(true);
jokeCreator(false);

//fUNCTION AS A VARIABLE
function func1() {
  console.log("function 1");
}
function func2() {
  console.log("function 2");
}
function func3() {
  console.log("function 3");
}
myArray = [func1, func2, func3];
myArray.forEach((func) => {
  func(myArray);
});

// I am still working on the game!!!
