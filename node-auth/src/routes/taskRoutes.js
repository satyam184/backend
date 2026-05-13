const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

router.post("/createTask", protect, taskController.createTask);
router.get("/getTasks", protect, taskController.getTasks);
router.post("/:id", protect, taskController.getTaskById);

module.exports = router;
