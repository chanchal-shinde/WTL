const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();


// Middleware
app.use(express.json());


// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Student Management API is running"
    });
});


// Student routes
app.use("/api/students", studentRoutes);


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});