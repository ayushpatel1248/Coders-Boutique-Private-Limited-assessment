const express = require('express')
const router = express.Router()
const TodoController = require("../controllers/TodoController")

router.post('/add', TodoController.addTodo)
router.post('/view', TodoController.view)
router.post('/delete', TodoController.deleteTodo)


module.exports = router