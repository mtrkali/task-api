const express = require("express");

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
} = require("../controllers/task.controller");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.patch("/:id", updateTask);

module.exports = router;