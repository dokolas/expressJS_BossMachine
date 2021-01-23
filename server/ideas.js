const express = require("express");
const ideaRouter = express.Router();

module.exports = ideaRouter;

const {
  getFromDatabaseById,
  getAllFromDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  addToDatabase,
} = require("./db");

ideaRouter.param("ideaId", (req, res, next, id) => {
  const idea = getFromDatabaseById("ideas", id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
});

ideaRouter.get("/", (req, res, next) => {
  res.send(getAllFromDatabase("ideas"));
});

ideaRouter.post("/", (req, res, next) => {
  const newIdea = addToDatabase("ideas", req.body);
  res.status(201).send(newIdea);
});

ideaRouter.get("/:ideaId", (req, res, next) => {
  res.send(req.idea);
});

ideaRouter.put("/:ideaId", (req, res, next) => {
  const updateIdea = updateInstanceInDatabase("ideas", req.body);
  res.send(updateIdea);
});

ideaRouter.delete("/:ideaId", (req, res, next) => {
  const deleteIdea = deleteFromDatabasebyId("ideas", req, params.ideaId);
  if (deleteIdea) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});
