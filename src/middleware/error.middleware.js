const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID",
        });
    }

    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};

module.exports = errorHandler;