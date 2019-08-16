const express = require('express');

const Data = require('../data-model');

const router = express.Router();


router.get('/', (req, res) => {
    Data.findTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

router.post('/', (req, res) => {
    const newTask = req.body;

    Data.addTasks(newTask)
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add tasks' });
        });
});

module.exports = router;
