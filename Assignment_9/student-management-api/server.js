const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:");
        console.error(error.message);
    });