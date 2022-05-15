const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get('/numbers/add', (req, res) => {
    let sum = parseInt(req.query.first) + parseInt(req.query.second)
    res.send({ sum })
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
