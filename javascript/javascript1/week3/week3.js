//username on freecodecamp: Rikkaa
//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here

const shiftName = names.shift(function (e) {
  return e !== nameToRemove;
});
// Code done
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timefunction(destinationDistance, speed) {
  return travelInformation.destinationDistance / travelInformation.speed;
}

const travelTime = timefunction(travelInformation);
console.log(
  Math.floor(travelTime) +
    " " +
    "hours and " +
    Math.floor((travelTime - Math.floor(travelTime)) * 60) +
    " " +
    "mintues"
); // 8 hours and 38 minutes

//Series duration of my life
const seriesDurations = [
  {
    title: "The wheel of time",
    days: 0,
    hours: 7,
    minutes: 28,
  },
  {
    title: "Rita",
    days: 1,
    hours: 1,
    minutes: 20,
  },
  {
    title: "Sex education",
    days: 1,
    hours: 2,
    minutes: 40,
  },
];
const lifeTime = 80 * 365 * 24 * 60;

function seriesTime() {
  for (let i = 0; i < seriesDurations.length; i++) {
    let logDuration =
      ((seriesDurations[i].days * 24 * 60 +
        seriesDurations[i].hours * 60 +
        seriesDurations[i].minutes) /
        lifeTime) *
      100;
    console.log(
      seriesDurations[i].title +
        " took " +
        logDuration.toFixed(seriesDurations.length) +
        "% of my life"
    );
  }
}
seriesTime(seriesDurations);

//NOnoN0nOYes (Note taking app)
const notes = [];

function saveNote(content, id, deadline) {
  const note = {
    content: content,
    id: id,
    deadline: deadline,
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1, "2022-01-03");
saveNote("Do laundry", 2, "2022-01-09");
saveNote("Done assignment", 3, "2022-01-07");
saveNote("Applying Jobs", 4, "2022-04-01");

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      console.log(notes[i]);
    }
  }
}
const firstNote = getNote(4);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes
function logOutNotesFormatted(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      console.log(
        "The note with id " +
          notes[i].id +
          "," +
          " has the following note text: " +
          notes[i].content +
          ". Due date is " +
          notes[i].deadline // add deadline as a feature
      );
    }
  }
}

logOutNotesFormatted(2); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
