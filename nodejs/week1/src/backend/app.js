const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservation = require("./data/reservations");
const reviews = require("./data/reviews");
const reviewedMeal = meals.map((meal) => {
  meal.reviews = [];
  reviews.forEach((review) => {
    if (meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  });
  return meal;
});

const cheapMeal = reviewedMeal.filter((meal) => meal.price < 100);
const largeMeal = reviewedMeal.filter((meal) => meal.maxNumberOfGuests > 3);

// this is where you will be adding your routes
app.get("/meals", async (request, response) => {
  response.send(reviewedMeal);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMeal);
});

app.get("/large-meals", async (request, response) => {
  response.send(largeMeal);
});

app.get("/meal", async (request, response) => {
  response.send(reviewedMeal[Math.floor(Math.random() * reviewedMeal.length)]);
});

app.get("/reservation", async (request, response) => {
  response.send(reservation[Math.floor(Math.random() * reservation.length)]);
});

app.get("/reservations", async (request, response) => {
  response.send(reservation);
});

module.exports = app;
