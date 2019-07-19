const express = require('express');

const helmet = require('helmet');

const ActionsRouter = require("./actions/ActionsRouter")
const ProjectsRouter = require("./projects/ProjectsRouter")

const server = express();

server.use(helmet())
server.use(express.json())
server.use("/actions", ActionsRouter)
server.use("/projects", ProjectsRouter)

server.get("/", (req, res)=> {
    res.send(`Server Running`)
})

module.exports = server;