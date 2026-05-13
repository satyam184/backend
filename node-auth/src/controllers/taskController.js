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

const getTasks = async (req, res) => {
  try {
    console.log(`request user: ${req.user}`);
    const tasks = await Task.find({
      user: req.user,
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createTask, getTasks };
