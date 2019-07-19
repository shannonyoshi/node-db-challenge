const express = require("express")

const Projects = require("./projects-model")

const router = express.Router()

router.get("/:id", async (req, res)=> {
    try{
        const project = await Projects.findById(req.params.id)
        if (project) {
        res.status(200).json(project)
        } else {
            res.status(404).json({message: "Project not found"})
        }
    } catch (err){
        console.log(err)
        res.status(500).json({message: "Failed to retrieve project"})
    }
})

router.post("/", async(req, res)=> {
    try {
        const project = await Projects.add(req.body)
            res.status(201).json(project)
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "Failed to add project"})
    }
})

module.exports = router