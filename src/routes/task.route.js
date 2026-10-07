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

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: Learn REST API
 *               description:
 *                 type: string
 *                 example: Build a task management API
 *               status:
 *                 type: string
 *                 enum:
 *                   - pending
 *                   - in-progress
 *                   - completed
 *                 example: pending
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Invalid task data
 *       401:
 *         description: Authentication required
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully
 *       401:
 *         description: Authentication required
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a single task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB task ID
 *     responses:
 *       200:
 *         description: Task retrieved successfully
 *       400:
 *         description: Invalid task ID
 *       404:
 *         description: Task not found
 *       401:
 *         description: Authentication required
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   patch:
 *     summary: Update a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Learn Advanced REST API
 *               description:
 *                 type: string
 *                 example: Build a complete task API
 *               status:
 *                 type: string
 *                 enum:
 *                   - pending
 *                   - in-progress
 *                   - completed
 *                 example: in-progress
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       400:
 *         description: Invalid task data or task ID
 *       404:
 *         description: Task not found
 *       401:
 *         description: Authentication required
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       400:
 *         description: Invalid task ID
 *       404:
 *         description: Task not found
 *       401:
 *         description: Authentication required
 */

router.post("/", authenticate, validateTask, createTask);
router.get("/", authenticate, getTasks);
router.get("/:id", authenticate, getTaskById);
router.patch("/:id", authenticate, validateTask, updateTask);
router.delete("/:id", authenticate, deleteTask);

module.exports = router;