const express = require("express");
const zoo = express();

zoo.use(express.json());

const jobs = [];
zoo.listen(4000, () => {
    console.log(`Server running on port 4000`);
});
zoo.get("/", (req, res) => {
    res.send("Jobs API is running");
});
zoo.post("/jobs", (req, res) => {
    jobs.push(req.body)
    res.status(201).json({
        message: "notes is created"
    })
});

// Get jobs
zoo.get("/jobs", (req, res) => {
    res.json(jobs);
});

zoo.delete("/jobs/:index", (req, res) => {
    delete jobs[req.params.index]
    res.status(204).json({
        message: "data is deleted"
    })
})
// patch method
zoo.patch("/jobs/:index", (req, res) => {
    jobs[req.params.index].job = [req.body].job

    res.status(200).json({
        message: "data is modified completed"
    })
})