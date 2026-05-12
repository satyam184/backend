const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({
      title,
      user: req.user,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = createTask;
