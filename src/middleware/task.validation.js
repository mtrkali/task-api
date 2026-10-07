const validateTask = (req, res, next) => {
    const { title, description, status } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Title and description are required",
        });
    }

    if (
        status &&
        !["pending", "in-progress", "completed"].includes(status)
    ) {
        return res.status(400).json({
            success: false,
            message: "Invalid task status",
        });
    }

    next();
};

module.exports = validateTask;