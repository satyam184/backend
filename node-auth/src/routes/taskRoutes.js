const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  getTaskById,
} = require("../controllers/taskController");

router.post("/createTask", protect, createTask);
router.get("/getTasks", protect, getTasks);
router.post("/:id", protect, getTaskById);

module.exports = router;
