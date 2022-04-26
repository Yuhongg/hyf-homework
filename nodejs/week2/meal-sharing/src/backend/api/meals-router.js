const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  try {
    let filteredMeals = meals;
    const maxPrice = request.query.maxPrice;
    const title = request.query.title;
    const limit = request.query.limit;
    const createdAfter = request.query.createdAfter;

    if (maxPrice) {
      if (Number.isInteger(parseInt(maxPrice))) {
        filteredMeals.filter((meal) => {
          meal.price <= maxPrice;
        });
      } else {
        response.statusCode = 400;
        response.json({ message: "maxPrice not an integer!" });
        return;
      }
    }

    if (title) {
      filteredMeals.filter((meal) => {
        meal.title.toLowerCase().includes(title.toLowerCase());
      });
    }

    if (limit) {
      if (Number.isInteger(parseInt(limit))) {
        filteredMeals.slice(0, limit);
      } else {
        response.statusCode = 400;
        response.json({ message: "limit not an integer!" });
        return;
      }
    }

    if (createdAfter) {
      if (Date.parse(createdAfter)) {
        filteredMeals = filteredMeals.filter((meal) => {
          Date.parse(meal.createdAt) >= Date.parse(createdAfter);
        });
      } else {
        response.statusCode = 400;
        response.json({ message: "date not properly formatted!" });
        return;
      }
    }

    response.send(filteredMeals);
    return filteredMeals;
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    if (!Number.isInteger(parseInt(id))) {
      response.statusCode = 400;
      response.json({ message: "input not an integer!" });
      return;
    } else {
      response.statusCode = 200;
      let foundMeal = meals.find((meal) => {
        meal.id === id;
      });
      response.send(foundMeal);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
