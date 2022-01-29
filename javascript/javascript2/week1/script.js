//Find the shortest world
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findShortestWord(array) {
  let currentWord;
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      currentWord = array[i];
    } else if (array[i].length < currentWord.length) {
      currentWord = array[i];
    }
  }
  return currentWord;
}

console.log(findShortestWord(danishWords));

//Find and count the Danish letters
const danishLetter = ["æ", "ø", "å"];

function countDanishLetters(string) {
  let countAe = 0;
  let countOe = 0;
  let countAa = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == danishLetter[0]) {
      countAe++;
    } else if (string[i] == danishLetter[1]) {
      countOe++;
    } else if (string[i] == danishLetter[2]) {
      countAa++;
    }
  }
  return (
    "total: " +
    (countAe + countOe + countAa) +
    ", æ: " +
    countAe +
    ",ø : " +
    countOe +
    ", å: " +
    countAa
  );
}

const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

//Spirit animal name generator
const spiritAnimals = [
  "The pretty dog",
  "The clever monkey",
  "The independent cat",
  "The nice pig",
  "The great rabbit",
  "The little fish",
];

const button = document.querySelector("button");
button.addEventListener("click", myFunction);
function myFunction() {
  const outputName = document.getElementById("name").value;
  const output = document.getElementById("output");
  //output.innerText = "Here's your spirit animal! Yay!";
  let spiritAnimal =
    spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
  if (outputName) {
    output.innerHTML = `${outputName} - ${spiritAnimal}`;
  }
}

//hyfBay - get the okay'est products here
