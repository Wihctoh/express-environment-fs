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
  const data = getAllenvironment();

  res.send(data);
});

app.get("/", (req, res) => {
  const data = getAllenvironment();

  res.send(data);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = getEnvironmentById(id);

  res.send(data);
});

app.post("/", (req, res) => {
  const { label, category, priority } = req.body;
  const data = createEnvironment(label, category, priority);

  res.send(data);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { label, category, priority } = req.body;

  const data = updateEnvironment(id, label, category, priority);

  res.send(data);
});

app.listen(3000, () => {
  console.log("server is running!");
});
