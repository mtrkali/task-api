require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.route");
const errorHandler = require("./middleware/error.middleware");
const authRoutes = require("./routes/auth.route");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Task API is running",
    });
});

app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});