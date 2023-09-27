const { result } = require("lodash");
const Taskmodel = require("../models/Task-model");
const TaskModel = require("../models/Task-model");

const taskCtrl = {
  pickTask(task) {
    return _.pick(task, ["taskId", "taskDescription", "dueDate", "priority"]);
  },

  //create Task
  createTask(req, res) {
    const task = req.body;

    new Taskmodel(task).save().then(
      (result,
      () => {
        res.status(201).send({ message: "task Created", data: result });
      })
    );
  },

  //update task

  updateTask(req, res) {
    const task = req.body;
    const { id } = req?.params;

    Taskmodel.updateOne({ _id: id }, task).then((result) => {
      if (!result) throw new Error("Task is Not Available");
    });
    res
      .status(200)
      .send({ message: "task updated", data: result })
      .catch((err) => {
        console.log(err);
        res.status(400).send({ message: "Task could not updated", error: err });
      });
  },

  //delete task

  deleteTask(req, res) {
    const { id } = req?.params;

    TaskModel.deleteOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "Task Deleted", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "Could not delete the task", error: err });
      });
  }, //deleteTask

  // fetch one task

  fetchOneTask(req, res) {
    const { id } = req?.params;

    Taskmodel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "task found", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "task not found", error: err });
      });
  },

  fetchAllTask(req, res) {
    Taskmodel.find()
      .then((result) => {
        res.status(200).send({ message: "task List", data: result });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(404)
          .send({ message: "The task are not available", error: err });
      });
  },
};

module.exports = taskCtrl;
