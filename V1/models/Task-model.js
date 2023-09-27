const mongoose = require("mongoose");
const autoIncerement = require("mongoose-sequence")(mongoose);

const taskSchema = new mongoose.Schema({
  taskId: Number,
  taskName: { type: String, minlength: 3, maxlength: 45, required: true },
  taskDescription: {
    type: String,
    minlength: 3,
    maxlength: 45,
    required: true,
  },
  dueDate: { type: Date, required: true },
  priority: { type: String, required: true },
});

module.exports = mongoose.model("tasks", taskSchema);
taskSchema.plugin(autoIncerement, { inc_field: "taskId" });
