const router = require('express').Router();
const {bodyValidator,idValidator} = require('../../middlewares/taskValidator')
const {getTask,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,} = require('../controllers/taskcontroller');
const {tokenValidation} = require('../../middlewares/tokenValidator');

router.get('/',tokenValidation,getTask);
router.post('/',bodyValidator,tokenValidation,createTask);
router.get('/:id',tokenValidation,idValidator,getTaskById);
router.patch('/:id',idValidator,bodyValidator,tokenValidation,updateTask);
router.delete('/:id',idValidator,tokenValidation,deleteTask);

module.exports = router;