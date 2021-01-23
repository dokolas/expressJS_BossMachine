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
