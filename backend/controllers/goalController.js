const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }else{
        const goals = await Goal.create({
            text: req.body.text
        })
        res.status(200).json(goals)
    }
})

const updateGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error('goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    res.status(200).json(updatedGoal)
})
const deleteGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error('goal not found')
    }
    await goals.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports =  { getGoals, setGoals, updateGoals, deleteGoals, }