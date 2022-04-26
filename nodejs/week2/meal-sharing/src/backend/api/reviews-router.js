const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json");

router.get("/", async (req, res) => {
  try {
    res.send(reviews);
    return reviews;
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);
    if (!Number.isInteger(parseInt(id))) {
      response.statusCode = 400;
      response.json({ message: "input not an integer!" });
      return;
    } else {
      response.statusCode = 200;
      const foundReview = reviews.find((review) => {
        review.id === id;
      });
      response.send(foundReview);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
