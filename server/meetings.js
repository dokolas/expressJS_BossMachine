const express = require("express");
const meetingRouter = express.Router();

const {
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase,
  createMeeting,
} = require("./db");

module.exports = meetingRouter;

meetingRouter.get("/", (req, res, next) => {
  res.send(getAllFromDatabase("meetings"));
});

meetingRouter.post("/", (req, res, next) => {
  const newMeeting = addToDatabase("meetings", createMeeting());
  res.status(201).send(newMeeting);
});

meetingRouter.delete("/", (req, res, next) => {
  res.status(204).send(deleteAllFromDatabase("meetings"));
});
