const express = require('express');

const ResourceRouter = require('./router/resource-router');
const ProjectRouter = require('./router/project-router');
const TaskRouter = require('./router/task-router');


const server = express();

server.use(express.json());
server.use('/resources', ResourceRouter);
server.use('/projects', ProjectRouter);
server.use('/tasks', TaskRouter);



module.exports = server;