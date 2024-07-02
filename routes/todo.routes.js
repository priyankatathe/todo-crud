const router = require("express").Router()

const  todoController = require("./../controllers/todo.controller")

router 
     .get("/", todoController.getTodos)
     .post("/add", todoController.addTodo)
     .put("/:id", todoController.updateTodo)
     .delete("/:id", todoController.delelteTodo)

     module.exports = router