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

minionsRouter.get("/", (res, req, next) => {
  console.log("Does this show when minions?");
  res.send(getAllFromDatabase("minions"));
});
