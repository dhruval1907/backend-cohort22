const express = require("express");
const zoo = express();

zoo.use(express.json());

const jobs = [];


zoo.listen(4000, () => {
    console.log(`Server running on port 4000`);
});


// Root route
zoo.get("/", (req, res) => {
    res.send("Jobs API is running");
});

// Create job
zoo.post("/jobs", (req, res) => {
    const data = req.body;
    jobs.push(data);
    res.json({
        message: "Job created",
        data: data
    });
});

// Get jobs
zoo.get("/jobs", (req, res) => {
    res.json(jobs);
});

