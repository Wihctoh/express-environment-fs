const express = require("express");
const bodyParser = require("body-parser");
const {
  getAllenvironment,
  getEnvironmentById,
  createEnvironment,
  updateEnvironment,
} = require("./service.js");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  try {
    const data = getAllenvironment();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/", (req, res) => {
  const data = getAllenvironment();

  res.send(data);
});

app.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = getEnvironmentById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.post("/", (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = createEnvironment(label, category, priority);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;

    const data = updateEnvironment(id, label, category, priority);

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("server is running!");
});
