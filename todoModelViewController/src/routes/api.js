const router = require('express').Router();

const taskControllers = require('../controllers/taskcontroller');

router.get('/', taskControllers.getTaskList);
router.post('/',taskControllers.createTask);
router.get('/:id',taskControllers.getTaskById);
router.patch('/:id',taskControllers.editTasksById);
router.delete('/:id',taskControllers.deleteTaskById);

module.exports = router;