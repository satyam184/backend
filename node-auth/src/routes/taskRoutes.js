const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

router.post(
  "/createTask",
  protect,
  taskController.createTask
  /* #swagger.security = [{
        "bearerAuth": []
  }] */
);
router.get(
  "/getTasks",
  protect,
  taskController.getTasks
  /* #swagger.security = [{
        "bearerAuth": []
  }] */
);
router.get(
  "/:id",
  protect,
  taskController.getTaskById
  /* #swagger.security = [{
        "bearerAuth": []
  }] */
);
router.put(
  "/:id",
  protect,
  taskController.updateTask
  /* #swagger.security = [{
        "bearerAuth": []
  }] */
);
router.delete(
  "/:id",
  protect,
  taskController.deleteTask
  /* #swagger.security = [{
        "bearerAuth": []
  }] */
);

module.exports = router;
