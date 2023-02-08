const taskServices = require('../services/taskServices');
const Joi = require('joi');
const { HTTPError } = require('../error');

const getTask = async (req,res) => {
    try{
        const tasks = await taskServices.getTaskService();
        return res.status(200).json({
            message : 'Task fetched succesfully',
            data : tasks,
        })
    }
    catch(error){
        if(error.message === 'invalid token'){
            return res.status(400).json({
              message: 'Invalid token',
            });
        }
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}
const createTask = async (req,res) => {
    try{
        const task = await taskServices.createTaskService(req.body.task)
        return res.status(201).json({
            message : 'Task Created successfully',
            data : task,
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const getTaskById = async(req,res) => {
    try{
        const id = Number(req.params.id);
        const task = await taskServices.getTaskByIdService(id);
        return res.status(200).json({
            message: `Task with id : ${id} is fetched successfully`,
            data : task,
        })
    }
    catch(error) {
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const updateTask = async (req,res) => {
    try{
        const task = await taskServices.updateTaskService(req.params.id,req.body);
        return res.status(200).json({
            message : 'Task updated successfully',
            data:task,
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const deleteTask = async(req,res) => {
    try{
        const task = await taskServices.deleteTaskByIdService(req.params.id);
        res.status(200).json({
            message : `Task with id : ${req.params.id} is deleted successfully`,
            data:task,
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

module.exports = {
    getTask,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
};