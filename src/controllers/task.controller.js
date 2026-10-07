const Task = require("../models/task.model");

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const task = await Task.create({
            title,
            description,
            status,
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create task",
            error: error.message,
        });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({
            success: true,
            message: "Tasks retrieved successfully",
            data: tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve tasks",
            error: error.message,
        });
    }
};



const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task retrieved successfully",
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve task",
            error: error.message,
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
};