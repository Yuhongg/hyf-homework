const express = require("express");
const app = express();
const router = express.Router;

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", async (request, response) => {
  const first = request.query.firstParam;
  const second = request.query.secondParam;
  const sum = subtractOverArray(first) + subtractOverArray(second);

  response.send(sum.toString());
});

function subtractOverArray(arrayContent) {
  let sum = 0;
  if (arrayContent.length > 1) {
    arrayContent.forEach((element) => {
      sum += parseInt(element);
    });
    return sum;
  } else {
    return parseInt(arrayContent);
  }
}

app.get("/calculator/subtract", async (request, response) => {
  const first = request.query.firstParam;
  const second = request.query.secondParam;
  const difference = subtractOverArray(first) - subtractOverArray(second);

  response.send(difference.toString());
});

function subtractOverArray(arrayContent) {
  let difference = 0;
  if (arrayContent.length > 1) {
    arrayContent.forEach((element) => {
      difference -= parseInt(element);
    });
    return difference;
  } else {
    return parseInt(arrayContent);
  }
}

app.get("/calculator/multiply", async (request, response) => {
  const first = request.query.firstParam;
  const second = request.query.secondParam;
  const product = subtractOverArray(first) * subtractOverArray(second);

  response.send(product.toString());
});

function subtractOverArray(arrayContent) {
  let product = 0;
  if (arrayContent.length > 1) {
    arrayContent.forEach((element) => {
      product *= parseInt(element);
    });
    return product;
  } else {
    return parseInt(arrayContent);
  }
}

app.get("/calculator/division", async (request, response) => {
  const first = request.query.firstParam;
  const second = request.query.secondParam;
  const divident = divideOverArray(first);
  const divisor = divideOverArray(second);
  let quotient;
  if (divisor !== 0) {
    quotient = divident / divisor;
  } else {
    response.statusCode = 400;
    return response.send("you may not divide by 0!");
  }

  response.send(quotient.toString());
});

function divideOverArray(arrayContent) {
  let quotient = 0;
  if (arrayContent.length > 1 && parseInt(element) !== 0) {
    arrayContent.forEach((element) => {
      quotient /= parseInt(element);
    });
    return quotient;
  } else {
    return parseInt(arrayContent);
  }
}

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
