//Flight booking fullname function
let useFormalName = true;
let gender = "male";
function getFullname(firstname, surname, useFormalName, gender) {
  let name = "";

  if (useFormalName == true && gender == "male") {
    name += "Lord ";
  } else if (gender == "female") {
    name += "Madam ";
  }

  name += firstname;
  name += surname;

  return name;
}
const fullname1 = getFullname("Julia ", "Omazen", false, "female");
console.log(fullname1);

//Event application
const weekdaysCycle = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let todayWeekday = new Date().getDay();

function getEventWeekday(day) {
  return weekdaysCycle[todayWeekday - 1 + (day % 7)];
}
console.log(getEventWeekday(13));

//Weather wear
let clothes = "";
function clothesToWear(temperature) {
  if (-10 < temperature && temperature < 0) {
    return (clothes = "Sweaters and jacket");
  } else if (temperature < 15) {
    return (clothes = "long shirts ");
  } else if (temperature < 22) {
    return (clothes = "T-shirt");
  } else {
    return (clothes = "T-short");
  }
}
console.log(clothesToWear(45));

//Student manager
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName == "Dronning Margrethe") {
    return class07Students.push(studentName);
  } else if (class07Students.length == 6) {
    return console.log("Cannot add more students to class 07.");
  } else if (studentIsInClass(studentName) == true) {
    return console.log("Student " + studentName + "is already in the class.");
  } else if (studentName == "") {
    return;
  } else {
    return class07Students.push(studentName);
  }
}

function studentIsInClass(studentName) {
  if (class07Students.includes(studentName)) {
    return true;
  } else {
    return false;
  }
}

addStudentToClass("Frederik");
addStudentToClass("Peter");
addStudentToClass("Marie");
addStudentToClass("Jonas");
addStudentToClass("Thomas");
addStudentToClass("Rasumus");
addStudentToClass("Dronning Margrethe");

console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}
