const express = require("express");

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
} = require("../controllers/task.controller");
const validateTask = require("../middleware/task.validation");
const authenticate = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/", authenticate, validateTask, createTask);
router.get("/", authenticate, getTasks);
router.get("/:id", authenticate, getTaskById);
router.patch("/:id", authenticate, validateTask, updateTask);
router.delete("/:id", authenticate, deleteTask);

module.exports = router;