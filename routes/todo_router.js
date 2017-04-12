const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.get('/', todoController.list) //index get all
router.post('/', todoController.create) //create post new todo

router.get('/:id', todoController.listOne) //show get specific todo
router.put('/:id', todoController.update) //update existing todo
router.delete('/:id', todoController.delete) //delete

router.get('/new', todoController.new)
router.get('/:id/edit', todoController.edit)

module.exports = router
