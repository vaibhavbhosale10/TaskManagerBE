const router = require("express").Router();

const {
  createTask,
  updateTask,
  deleteTask,
  fetchOneTask,
  fetchAllTask,
} = require("../controllers/TaskController");

router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/:id", fetchOneTask);
router.get("/", fetchAllTask);

module.exports = router;
