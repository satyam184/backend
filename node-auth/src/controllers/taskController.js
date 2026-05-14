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

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.user.toString() !== req.user) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    if (task.user.toString() !== req.user) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }
    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.user.toString() !== req.user) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await task.deleteOne();
    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
