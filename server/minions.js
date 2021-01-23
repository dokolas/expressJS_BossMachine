const express = require("express");
const minionsRouter = express.Router();

module.exports = minionsRouter;

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

minionsRouter.param("minionId", (req, res, next, id) => {
  const minion = getFromDatabaseById("minions", id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});

minionsRouter.get("/", (req, res, body) => {
  res.send(getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res, body) => {
  const newMinion = addToDatabase("minions", req.body);
  res.status(201).send(newMinion);
});

minionsRouter.get("/:minionId", (req, res, next) => {
  res.send(req.minion);
});

minionsRouter.put("/:minionId", (req, res, next) => {
  const updateMinion = updateInstanceInDatabase("minions", req.body);
  res.send(updateMinion);
});

minionsRouter.delete("/:minionId", (req, res, next) => {
  const deleteMinions = deleteFromDatabasebyId("minions", req.params.minionId);
  if (deleteMinions) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});
