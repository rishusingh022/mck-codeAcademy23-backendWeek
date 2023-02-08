const taskServices = require('../services/taskServices')

async function getTaskList (req,res) {
    try {
        const tasks = await taskServices.getTaskList();
        res.status(200).json(tasks);
    }
    catch(err){
        return res.status(400).json({message : err.message});
    }
}

async function createTask(req,res){
    try{
        const task = await taskServices.createTask(req.body.task)
        res.status(201).json(task)
    }
    catch (err) {
        return res.status(400).json({message: err.message});
    }
}

async function getTaskById(req,res){
    try{
        const task = await taskServices.getTaskById(req.params.id);
        res.status(200).json(task);
    }
    catch (err) {
        return res.status(400).json({message: err.message});
    }
}

async function editTasksById(req,res){
    try{
        const task = await taskServices.editTasksById(req.params.id,req.body);
        res.status(200).json(task);
    }
    catch (err) {
        return res.status(400).json({message: err.message});
    }
}

async function deleteTaskById(req,res){
    try{
        const task = await taskServices.deleteTaskById(req.params.id);
        res.status(200).json(task);
    }
    catch (err) {
        return res.status(400).json({message : err.message});
    }
}

module.exports = {
    getTaskList,
    createTask,
    getTaskById,
    editTasksById,
    deleteTaskById
};