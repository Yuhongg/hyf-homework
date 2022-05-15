const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/", async (req, res) => {
  try {
    res.send(reservations);
    return reservations;
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
      const foundReservation = reservations.find((reservation) => {
        reservation.id === id;
      });
      response.send(foundReservation);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
