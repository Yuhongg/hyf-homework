let yearOfBirth = 1995;
let yearFuture = 2027;
let age = yearOfBirth - yearFuture;
console.log("You will be " + age + "years old in " + yearFuture + ".");

let dogYearOfBirth = 2010;
let dogYearFuture = 2021;
let dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears == true) {
  console.log("Your dog will be " + dogYear + "years old in" + dogYearFuture);
} else {
  console.log("Your dog will be " + age + "years old in" + dogYearFuture);
}

let width;
let depth;
let height;
let volumeInMeters = width * depth * height;
let gardenSizeInM2;
let fairHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let actualHousePrice;

if (actualHousePrice >= fairHousePrice) {
  console.log("The prospective buyers are paying too much for the house.");
} else {
  console.log("The prospective buyers are paying a fair amount for the house.");
}

let firstWords = [
  "great",
  "nice",
  "super",
  "neat",
  "urban",
  "time",
  "digital",
  "zoom",
  "goody",
  "future",
];
let secondWords = [
  "corporation",
  "firm",
  "company",
  "studio",
  "zone",
  "game",
  "easy",
  "vision",
  "mission",
  "door",
];
let startupName;

const randomNumber = Math.floor(Math.random() * 10);
let firstWord = firstWords[randomNumber];
let secondWord = secondWords[randomNumber];

console.log(
  "The startup '" +
    firstWords +
    "" +
    secondWord +
    "' contains " +
    (firstWord.length + secondWord.length) +
    "characters."
);
