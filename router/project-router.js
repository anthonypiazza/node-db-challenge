const express = require('express');

const Data = require('../data-model');

const router = express.Router();


router.get('/', (req, res) => {
  Data.findProjects()
    .then(proj => {
        res.json(proj);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.post('/', (req, res) => {
    const newProject = req.body;

    Data.addProjects(newProject)
      .then(proj => {
          res.json(proj);
      })
      .catch(err => {
          res.status(500).json({ message: 'Failed to add projects' });
      });
  });

module.exports = router;
