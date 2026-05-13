const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

router.post("/createTask", protect, taskController.createTask);
router.get("/getTasks", protect, taskController.getTasks);
router.get("/:id", protect, taskController.getTaskById);
router.put("/:id", protect, taskController.updateTask);

module.exports = router;
