const express = require('express');

const Data = require('../data-model');

const router = express.Router();


router.get('/', (req, res) => {
  Data.findResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.post('/', (req, res) => {
    const newResource = req.body;

    Data.addResources(newResource)
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add resources' });
        });
});

module.exports = router;
