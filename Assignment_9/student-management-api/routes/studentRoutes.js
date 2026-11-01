const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

// CREATE student
router.post("/", async (req, res) => {
    try {
        const student = new Student(req.body);

        const savedStudent = await student.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// GET all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;