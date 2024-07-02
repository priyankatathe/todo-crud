const Todo = require("../models/Todo")
const asnychandler = require("express-async-handler")

exports.getTodos = asnychandler(async(req, res) => {
    const result = await Todo.find()
    res.json({ message: " fetcch todo successfully", result})
})
exports.addTodo = asnychandler(async(req, res) => {
    await Todo.create(req.body)
    res.json({ message: " add todo successfully"})
})
exports.updateTodo = asnychandler(async(req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: " update todo successfully"})
})
exports.delelteTodo = asnychandler(async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: " delete todo successfully"})
})

