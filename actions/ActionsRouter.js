const express = require("express")

const Actions = require("./actions-model")

const router = express.Router()

router.post("/:id", async (req, res)=> {
    try{
        const action = await Actions.add(req.body, req.params.id)
    res.status(201).json(action)
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "Failed to add action"})
    }
})

router.get("/:id", async(req, res)=> {
    try{
        const action = await Actions.findWithContexts(req.params.id)
        res.status(200).json(action)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Failed to retrieve action"})
    }
})

module.exports=router